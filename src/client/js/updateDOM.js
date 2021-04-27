const scoreTag = document.querySelector("#score-tag")
const agreement = document.querySelector("#agreement")
const subjectivity = document.querySelector("#subjectivity")
const confidence = document.querySelector("#confidence")
const irony = document.querySelector("#irony")
const result = document.querySelector('#result-section')
const btn = document.querySelector("#button")


export function updateDOM(data){
        // Update dom element with data from the server

        scoreTag.innerHTML = convertScoreTag(data.scoreTag)
        agreement.innerHTML = data.agreement
        subjectivity.innerHTML = data.subjectivity
        confidence.innerHTML = data.confidence + '%'
        irony.innerHTML = data.irony

        // Make the result section visible
        result.classList.add('show')

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
function convertScoreTag(score){
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