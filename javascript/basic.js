// word vs keyword 
// agr language me koi special meaning h to use usse keyword bolte h
//  agr koi special meaning nhi h to use word bolte h 
// if,for ,else = keywords || amit ,hello=words

// --------------------------------

// var , let , const = keywords used to declare variables


let a = 3; //used to assign variables in modern era in this the variables can be changed
a = {1:"amit"}

var b ="amit"

const c =19;  //can't be update const keyword

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(c);


// -----------------------------------------------------

// Hoisting = in javascript variable and function declaration are moved to the top of the code before execution
// var = hoisted 
// let and const = not hoisted
// var a = 3  ye breakdown hota hai var a; a = 3 ; me and var a ye declaration hai jo ki hoisted hota hai
// but value undefined melegi na ki error aayega
console.log(d);
var d = 5;



// --------------------------------------------------------
// primitive vs reference data types
// primitive = number , string , boolean , null , undefined , symbol
// reference ={},[],()
// reference me real value copy nhi hoti hai uska address copy hota hai and prmitive me 
// real value copy hoti hai
let arr = [1,2,3]
let brr = arr
brr.pop()
console.log(arr);
console.log(brr);
// refrence me dono me change kroge to dono me change hoga 



// -----------------------------------------
// //Block scope and function scope 
// if(true){
//     var functionScope = "I am function scope"
//     let blockScope = "I am block scope"
//     console.log(blockScope);
    
// }
// console.log(functionScope);
// // console.log(blockScope);  let and const they only visible in the block where they defined

// console.log(myvar);
// myvar = "helllo"

