// const x = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(x);


const chai = {
    name : 'chai',
    price : 20,
    isAvailable : true,
    orderChai : function(){
        console.log("code fat gaya");
    }

}

// console.log(chai);


// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     writable: false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));b 

for (let [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
    }
   