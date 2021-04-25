
export function sendData(text){

        return fetch('http://localhost:8081/analyse', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(text)
                })
                .then( res => res.json() )
}