// select the DOM elements
const scoreTag = document.querySelector("#score-tag")
const agreement = document.querySelector("#agreement")
const subjectivity = document.querySelector("#subjectivity")
const confidence = document.querySelector("#confidence")
const irony = document.querySelector("#irony")
const btn = document.querySelector("#button")


btn.addEventListener("click", analyseTxt)


function analyseTxt(){
        let txt = document.querySelector("#txt-area").value
        console.log(txt)
}
