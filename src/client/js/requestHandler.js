
export function sendData(url){

        return fetch('http://localhost:8081/analyse', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(url)
                })
                .then( res => res.json() )
}