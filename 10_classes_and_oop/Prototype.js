// let myName = "parijat   "

// console.log(myName.length); // returns 10
// console.log(myName.trueLength);

// let heros = ["thor","batman"]


// let heroPower = {
//     thor : "hammer",
//     batman : "money",

//     getBatmanPower: function(){
//         console.log(`Batman power is ${this.batman}`);
//     }
// }

// Object.prototype.parijat = function(){
//     console.log(`parijat present in all objects`);
// }

// // heroPower.parijat()

// heros.parijat()

// //iheritance 
// const User = {
//     name : "chai",
//     email : "chaigoogle.com"
// }

// const Teacher = {
//     makeVid : true
// }

// const TeachSup = {
//     isAvail : false 
// }

// const TAsupp = {
//     makeAssgn : 'Js assgnmnet',
//     fullTime : true,
//     __proto__: TeachSup 
// }

// Te.__proto__ = User

//modern syntax


//Object.setPrototypeOf(TeachSup, Teacher)


String.prototype.truelength = function(){
    log(`true length is ${this.trim().length}`)
}

"parijat".truelength()
"ise".truelength()