// Immediately Invoked Fucntion Expression (IIFE)

// sometimes we want to invoke function immediately 
// we use iife 

// function chai(){
//     console.log(`DB connected`);
// }
// chai() => this is ok but sometimes this chai() may get corrupted by global things 

(function chai(){ // => named IIFE
    console.log(`DB connected`);
})();//=> now chai is saved from global pollution

// for chai a ';' is given to end the 1st function correclty


((name)=>{ // => un-named IIFE
    console.log(`Hello ${name}`);
})('parijat')

