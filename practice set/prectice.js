// let body = document.querySelector("body")
// let p = document.querySelector("h2")
// let btn =  document.createElement("button")
// let btn2 =  document.createElement("button")
// let score = 0
// btn.innerText = "click me"
// btn.style.backgroundColor = "Blue"
// btn.style.color = "white"
// btn.style.padding =  "10px"
// btn.style.borderRadius =  "10px"

 
// btn2.innerText = "remove"
// btn2.style.backgroundColor = "red"
// btn2.style.color = "white"
// btn2.style.padding =  "10px"
// btn2.style.borderRadius =  "10px"



// body.append(btn)
// body.append(btn2)
 
// btn.addEventListener("click", () =>{
//     score++
//     p.innerText = score
// })

// btn2.addEventListener("click", () =>{
//     score--
//     p.innerText = score
// })
let display = "";
 let input = document.querySelector("#inp").value 

 let btns = document.querySelectorAll("button")

 btns.forEach((e)=>{
    e.addEventListener("click",()=>{
         
        input = display

    })
 })