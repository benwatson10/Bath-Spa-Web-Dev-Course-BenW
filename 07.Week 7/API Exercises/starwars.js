
fetch("https://swapi.dev/api/people/1")
.then(response => {
    // this line gets the response code
    console.log(response.status)
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(e => {
    console.log(e)
})