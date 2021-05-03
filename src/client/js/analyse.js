// Import modules
import {sendData} from "./requestHandler"
import {updateDOM, removeAllSections} from './updateDOM'
import {isURL} from './validateURL'


// select the DOM elements
const btn = document.querySelector("#button")
const txtArea = document.querySelector('#txt-area')
const userErrorSection = document.querySelector("#user-error")


btn.addEventListener("click", analyseTxt)

// This function send text to the server to be analysed and it then update the DOM with the returned data
function analyseTxt(){
        // Get the text inside the input filed
        let url = document.querySelector("#txt-area").value

        // Check if the text-area has a valid value
        if (url.length == 0 || !isURL(url)){

                // remove any 2nd section
                removeAllSections()

                // Add user error section to the DOM
                userErrorSection.classList.remove('hidden')
                userErrorSection.classList.add('animate')

                // Add a red border on the input
                txtArea.classList.add('error')
                return 0
        }

        txtArea.classList.remove('error')
        btn.classList.add('loading')

        // Send data to the server and get the data
        sendData({url: url}).then(

                // Update UI with the data
                result => updateDOM(result)
        )

}
