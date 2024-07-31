//ES6

class User{
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPass(){
        return `${this.pass}abc`
    }
    newUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("parijat","chai.com","123")

console.log(chai.encryptPass());
console.log(chai.newUsername());



