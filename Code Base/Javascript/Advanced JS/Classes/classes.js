class User{
    // _name = '';
    constructor(name){
        // there is no variable such as _name declared
        // still the compiler will declare it automatically
        this._name = name;
    }

    sayHi(){
        console.log(this._name + " says Hi!");
    }
}

var user = new User('Bala Abinesh Surya');
user.sayHi();