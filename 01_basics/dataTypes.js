// int => 2^ 53
//string => ""
// boolean = true/false
//null = standalone value
//undefined =>
// symbol => unique
// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

//+++++++++++++++++++++++++++++++++++++++++++++

//conversion output

//To int
// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

//To Boolean
//1 => true ; 0 => false
// "" => false
// "abc" => true

//console.log(1+2+"2") => 32
//console.log("1"+2+2) => 122

//+++++++++++++++++++++++++++++++++++++++++++++

//Types of dataTypes 

//1. Primitive(call by value)=> 7 types : String , Number , Boolean , null , undefined , Symbol:to make smtg unique

//Js is dynamically typed lang


//2. Reference/Non primitive(call by reference) => Array, Objects, Functions 

// const id = Symbol("123")
// const newid = Symbol("123") 
// console.log(id === newid) => false

// let obj={
//     Name:"Parijat",
//     age : 22
// }
 
// const myfunc=function(){
//     console.log("Hello world");
// }

//+++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitve) => copy of declarations used , original value not changed
// Heap(Non primitive) => reference to original variable => original value changed 

//String

// console.log(`Hwllo my name is ${"Parijat"} and salary is ${12000}`) //String interpolation

// const gameName = new String('Parijat')

// const  newName = gameName.substring(0,4)
// console.log(newName);

// console.log(newName.trim());

const url = "https://snjtb%20"
//  console.log(url.replace('%20','-'))
console.log(url);

// console.log(gameName.split('-'));

// const balance = new Number(200)

// console.log(balance.toFixed(2)) //=> 200.00
// console.log(balance.toPrecision(2)) //=> 200.00
// console.log(balance.toLocaleString('en-IN'))

// Maths 

console.log(Math); //=> object

// Date & time



