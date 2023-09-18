// base class / parent class
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        return `${this.name} makes a noise`
    }
}

// child class
class Dog extends Animal{
    constructor(name){
        super(name);
    }

    barks(){
        return `${this.name} barks!!!`
    }
}

var dog = new Dog('Pug');
console.log(dog.speak());
console.log(dog.barks());