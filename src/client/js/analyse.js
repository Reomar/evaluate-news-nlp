// Import modules
import {sendData} from "./requestHandler"
import {updateDOM} from './updateDOM'
require('dotenv').config();


// select the DOM elements
const btn = document.querySelector("#button")


btn.addEventListener("click", analyseTxt)

// This function send text to the server to be analysed and it then update the DOM with the returned data
function analyseTxt(){
        // Get the text inside the input filed
        let txtValue = document.querySelector("#txt-area").value

        // Check if the text-area has a valid value
        if (txtValue.length == 0){
                // @TODO: update the dom with error
                alert('Text filed is empty')
                return 0
        }

        // Send data to the server and get the data
        let article = {text: txtValue}

        sendData(article).then(

                // Update UI with the data
                result => updateDOM(result)
        )

}
