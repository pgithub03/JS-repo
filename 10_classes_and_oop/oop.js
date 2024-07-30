const user = {
    username : "parijat",
    logincount : 4,
    signIn : true,

    getUserDetails : function (){
        //console.log("Details obtained");
        //console.log(`username is : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.logincount);
// console.log(user["username"]);
//console.log(user.getUserDetails());

// const promiseOne = new Promise ()

// const date = new Date()

function User(username, logincount, signIn){
    this.username = username 
    this.logincount = logincount
    this.signIn = signIn

    this.greet = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("parijat",12, false)// constructor function gives new instance 
const userTwo = new User("ding dong", 11, true)
console.log(userOne);
console.log(userTwo);