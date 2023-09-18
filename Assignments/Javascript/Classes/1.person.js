class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    info(){
        return `My name is ${this.name} and I'm ${this.age} years old!`
    }
}

// creating instances for the Person class
person1 = new Person('Bala Abinesh Surya', 22);
person2 = new Person('Ajin', 23);

console.log(person1.info())
console.log(person2.info())
