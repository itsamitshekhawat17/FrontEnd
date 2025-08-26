// 4 pillers of the DOM
// Selecting an element
// Changing HTML
// Changing CSS
// Event listener


var a = document.querySelector("h1")//selected an element that is h1


a.addEventListener("click",function(){
    a.innerHTML = "AMIT SINGH SHEKHAWAT"
    a.style.color = "green"
    a.style.backgroundColor = "black"
})
