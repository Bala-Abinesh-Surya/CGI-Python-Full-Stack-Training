// Before ES6
const person = {
    name: 'Bala Abinesh Surya',
    age: 22,
    gender: 'Tamil Nadu'
}

let name1 = person.name
let age1 = person.age
let gender1 = person.gender

console.log(name1, ' ', age1, ' ', gender1)

// After ES6
// Object destructuring
// the variables in the left hand side array should be present in the object
let {name, age, gender} = person

console.log(name, ' ', age, ' ', gender)

