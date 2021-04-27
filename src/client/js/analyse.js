// Import modules
import {sendData} from "./requestHandler"
import {updateDOM} from './updateDOM'


// select the DOM elements
const btn = document.querySelector("#button")
const txtArea = document.querySelector('#txt-area')

btn.addEventListener("click", analyseTxt)

// This function send text to the server to be analysed and it then update the DOM with the returned data
function analyseTxt(){
        // Get the text inside the input filed
        let txtValue = document.querySelector("#txt-area").value

        // Check if the text-area has a valid value
        if (txtValue.length == 0){
                txtArea.classList.add('error')
                return 0
        }

        txtArea.classList.remove('error')
        btn.classList.add('loading')

        // Send data to the server and get the data
        let article = {text: txtValue}

        sendData(article).then(

                // Update UI with the data
                result => updateDOM(result)
        )

}
