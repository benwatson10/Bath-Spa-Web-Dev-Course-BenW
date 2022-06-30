//First fetching will be done by local json file/text file
console.log("Hello Amira")

function getData(){
    url="texting.txt";
    fetch(url)
        .then((response)=>{
        console.log("Promise done");
         return response.text();})
        .then((data)=>{
        console.log("After getting data")
        console.log(data);
        })
}
console.log("Before of fetching data")
getData();

