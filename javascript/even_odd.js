const prompt =require("prompt-sync")()
let num = prompt("enter the number you want to check")
if (num%2==0){
    console.log(num , " is a even number ");
    
}
else{
    console.log(num,"is a odd number");
    
}
