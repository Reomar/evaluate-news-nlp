const scoreTag = document.querySelector("#score-tag")
const agreement = document.querySelector("#agreement")
const subjectivity = document.querySelector("#subjectivity")
const confidence = document.querySelector("#confidence")
const irony = document.querySelector("#irony")
const btn = document.querySelector("#button")
const resultSection = document.querySelector('#result-section')
const introSection = document.querySelector("#intro-section")
const userErrorSection = document.querySelector("#user-error")
const serverErrorSection = document.querySelector('#server-error')


export function updateDOM(data){
        // Update dom element with data from the server

        scoreTag.innerHTML = convertScoreTag(data.scoreTag)
        agreement.innerHTML = data.agreement
        subjectivity.innerHTML = data.subjectivity
        confidence.innerHTML = data.confidence + '%'
        irony.innerHTML = data.irony

        //remove any 2nd section
        removeAllSections()

        // Make the result section visible
        resultSection.classList.remove('hidden')
        resultSection.classList.add('animate')

        btn.classList.remove('loading')

}

export function displayServerError(){

        //remove any 2nd section
        removeAllSections()

        // Make the Server error section visible
        serverErrorSection.classList.remove('hidden')
        serverErrorSection.classList.add('animate')

        // Remove the button loading style
        btn.classList.remove('loading')
}

/**
*       Score tag can be translated into:

*      P+: strong positive
*      P: positive
*      NEU: neutral
*      N: negative
*      N+: strong negative
*      NONE: without polarity
 */
export function convertScoreTag(score){
        let convertedScore

        switch(score){
                case 'P+':
                        convertedScore = 'Strong Positive'
                        break;

                case 'P':
                        convertedScore = 'Positive'
                        break;

                case 'NEU':
                        convertedScore = 'Neutral'
                        break;

                case 'N':
                        convertedScore = 'Negative'
                        break;

                case 'N+':
                        convertedScore = 'Strong Negative'
                        break;

                default:
                        convertedScore= 'No polarity'
        }

        return convertedScore

}

// Remove the 2nd section of the page
export function removeAllSections(){

        if (!('hidden' in introSection.classList)){
                introSection.classList.add('hidden')
        }

        if (!('hidden' in resultSection.classList)){
                resultSection.classList.add('hidden')
        }

        if (!('hidden' in userErrorSection.classList)){
                userErrorSection.classList.add('hidden')
        }

        if (!('hidden' in serverErrorSection.classList)){
                serverErrorSection.classList.add('hidden')
        }
}