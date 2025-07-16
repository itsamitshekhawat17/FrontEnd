let a = 3; //used to assign variables in modern era in this the variables can be changed
a = {1:"amit"}

var b ="amit"

const c =19;  //can't be update const keyword



console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


//Block scope and function scope 
if(true){
    var functionScope = "I am function scope"
    let blockScope = "I am block scope"
    console.log(blockScope);
    
}
console.log(functionScope);
// console.log(blockScope);  let and const they only visible in the block where they defined

console.log(myvar);
myvar = "helllo"

