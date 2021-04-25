const scoreTag = document.querySelector("#score-tag")
const agreement = document.querySelector("#agreement")
const subjectivity = document.querySelector("#subjectivity")
const confidence = document.querySelector("#confidence")
const irony = document.querySelector("#irony")

export function updateDOM(data){
        console.log(data.agreement, data.confidence , data.irony)
}