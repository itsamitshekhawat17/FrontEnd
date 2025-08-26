// Arrays are used to store different values of same datatype in a single variable
 

let array = [1,2,3,78,5]
for(let i =0;i<5;i++){
    console.log(array[i])
}

// push pop unshift shift splice
array.push(3)
for(let i =0;i<6;i++){
    console.log(array[i])
}

array.pop(3)
for(let i =0;i<5;i++){
    console.log(array[i])
}

// unshift = starting me value add krta hai 
// shift = starting se value delete krta hai 

// splice
array.splice(3,1)
for(let i =0;i<5;i++){
    console.log(array[i])
}