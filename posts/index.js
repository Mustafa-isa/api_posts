//start request
//glopal
let right =document.querySelector(".right")
let ul =document.querySelector(".ul")

function renderuser(){
    axios(`https://jsonplaceholder.typicode.com/users`)
.then( res =>{

    let data = res.data
    for( const datum of data){
  let li  =document.createElement("li")
  li.classList ="ele"


  li.innerHTML =` <div  class="div" id="${datum.id}>
  
  <span class="content">${datum.name}</span>
  <span class="email">${datum.email}</span>
  
  </div>`
  ul.append(li)
    }

})

}
//take id
ul.addEventListener("click" , (e) =>{

   if(e.target.classList =='div'){


   console.log( e.target.getAttribute("id"))
 
   } 
})


function renderDataposts(){

    axios(`https://jsonplaceholder.typicode.com/posts`)
.then( res =>{

    let data = res.data
    for( const datum of data){
        let div =document.createElement("div")
        div.classList ="element"
div.innerHTML += `     <h2>${datum.title}</h2>
<p>${datum.body}</p>`
       right.append(div)
    }

})
}
renderDataposts() // render posts in dom
renderuser()