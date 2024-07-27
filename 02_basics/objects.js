// const obj = {
//     name : "Parijat",
//     year : 3,
//     email : "abc@gmail.com",
//     salary : 1200
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty('name'));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//De structuring of object

const course = {
    name : "parijat",
    salary : "9999",
    name1 : "js js"
}

const {name : p} = course // destructure of object course


console.log(p);

// { json-
//     "name" : "parijat",
//     "coursename" : "js ding dong",
//     "price" : "free"
// }
