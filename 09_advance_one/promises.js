// Promise --> The Promise object represents the eventual
// completion (or failure) of an asynchronous operation and its resulting value.

//Promises have 3 states 

//1.pending
//2.fullfilled
//3.rejected

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//create promise 
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task 
    //DB calls , cryptography tasks , network calls 
    setTimeout(function(){
        console.log('Aysnc task is complete');
        resolve()
    },1000)
})

//consumption of created promise 

promiseOne.then(function(){
    console.log("Promise consumed");
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//create a promise and consumption in single 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Aysnc task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",
            email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username : "parijat",passworf : "123"})
        }else{
                reject('ERROR: Something went wrong')         
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username : "javascript",passworf : "123"})
        }else{
                reject('ERROR: Js went wrong')         
        }
    },1000)
})

async function consumePromiseFive(){
try{
    const response = await promiseFive
    console.log(response);
}catch(error){
    console.log(error);
}
}

consumePromiseFive()

// async function getAllUsers(){
// try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// }catch(error){
//     console.log("E:",error);
// }
// }
// getAllUsers()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


