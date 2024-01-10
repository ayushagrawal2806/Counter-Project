let body = document.querySelector("body");
let incre = document.querySelector("#button1");
let decre = document.querySelector("#button2");
let reset = document.querySelector("#button3");
let display = document.querySelector(".display")
let para = document.querySelector("p");


incre.addEventListener("click" , () => {
    
    let val = parseInt(display.innerText);
    val++;
    display.innerText =  val;
    incre.style.backgroundColor = "lightgreen";
    decre.style.backgroundColor = "";
    para.innerText = "Incremented By 1"
    
    
});

decre.addEventListener("click" , () => {
    let val = parseInt(display.innerText);
    val--;
    display.innerText =  val;
    decre.style.backgroundColor = "red";
    incre.style.backgroundColor = "";
    para.innerText = "Decremented By 1"

})

reset.addEventListener("click" , () => {
    display.innerText =  0;
    decre.style.backgroundColor = "";
    body.style.backgroundColor = ""
    incre.style.backgroundColor = "";
    para.innerText = "Reset To 0"
   
});