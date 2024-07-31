class User{
    constructor(username){
        this.username = username
    }
 
    logMe(){
        console.log(`Username is ${this.ussername}`);
    }

    static createId(){ // static makes sure not to give createId access to all 
        return `123`
    }
 
}

// 
// const parijat = new User("parijat")
// parijat.createId()


class Teacher extends User{
    constructor(username ,email){
        super(username)
        this.email = email 
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()