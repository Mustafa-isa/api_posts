//start request

function getData(){

    axios.get(" http://api.aladhan.com/v1/currentDate?zone=Europe/London")
    .then( res =>{
console.log(res)

    })
    .catch( () =>{
        console.log("htere is wrong")
    })
}
getData()
