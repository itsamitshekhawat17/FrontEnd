const prompt = require("prompt-sync")()

let age = prompt("enter you age")

if(age>=18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote");
    
}