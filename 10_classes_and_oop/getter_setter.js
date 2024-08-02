class User{
    constructor(email, pass){
        this.email = email
        this.pass = pass
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get pass(){
        return this._pass.toUpperCase() // same as set pass i.e. this._pass
    }
    set pass(value){
        this._pass = value // we using this._pass not this.pass
    }
}

const parijat = new User("parijat.com","a2b")
console.log(parijat.email);

// getter and setter comes when we dont want to give access of pass or smtg 
// if we get value from outside class we use getter 
//to set a value from inside class we use setter 