const User={
    _email : 'abc.com',
    _pass : "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get pass(){
        return this._pass
    },
    set pass(value){
        this._pass = value
    }
}

const Tea = Object.create(User)
console.log(Tea.pass);
