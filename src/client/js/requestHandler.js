
export function sendData(url){

        // Change the Fetch url to http://localhost:8081/analyse when testing on webpack local server !
        return fetch('/analyse', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(url)
                })
                .then( res => res.json() )
}