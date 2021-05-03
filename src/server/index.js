var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
const fetch = require("node-fetch");

const app = express();
app.use(cors());
// to use json
app.use(express.json());
// to use url encoded values
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/analyse", (req, res) => {
  console.log("Request Received...");
  let articleURL = req.body.url;

  // Get Text Analysis from Meaning Cloud Sentiment Analysis API version 2.1
  // https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis

  const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&url=${articleURL}&lang=en`;

  fetch(url)
    .then((res) => res.json())
    .then((body) => {
      console.log("API Data Sent...");
      console.log("--------------------");

      let status
      if (body.status.code == 100){
        throw new Error('Request failed')
      }

      // Send the API Data to the font-end to be updated in the DOM
      res.send(
        JSON.stringify({
          success : true,
          scoreTag: body.score_tag,
          agreement: body.agreement,
          subjectivity: body.subjectivity,
          confidence: body.confidence,
          irony: body.irony,
        })
      );
    })
    .catch((err) =>{
        console.log(err)
        res.send(
          JSON.stringify({
            success : false
          }))
    });
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081,  () => {
  console.log("Node App is listening for requests!");
});
