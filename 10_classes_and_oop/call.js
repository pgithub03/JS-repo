function setUsername(username){
    //complex DB calls
    this.username = username
}

function  createUser(username, email, pass) {
    setUsername.call(this,username) // call makes the function get the current context of this 
    
    this.email = email
    this.pass = pass
}

const chai = new createUser("chai","charexapmle.com","123")
console.log(chai);