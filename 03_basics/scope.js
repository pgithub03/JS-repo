//scope of windows browser and scope of code editor is different

// console.log(func1(2))// returns 3
// function func1(num){
//     return num + 1
// }

// console.log(func2(2))// returns cannot find func2
// const func2 = function (num) {
//     return num + 1

// }

// console.log(func2(2))// returns 3


//in browser global object is window

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = function(){
//      console.log(this);
// }

// chai()

// const chai = () => {
//     console.log(this);
// }

// // chai()

// const add = (n1 , n2) => { => explicit return 
//     return n1+n2
// }

// const add = (n1 , n2) => n1+n2 //implicit return
    
const add = () => ({username : "parijat"})

console.log(add());