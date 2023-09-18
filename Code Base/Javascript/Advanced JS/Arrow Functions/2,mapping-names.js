const persons = [
    {name: 'Bala Abinesh Surya', age: 21},
    {name: 'Asir Paul', age: 22},
    {name: 'Ebinesh', age: 22},
    {name: 'Dany', age: 27},
    {name: 'Ajin', age: 29},
    {name: 'Jeya Hari', age: 29},
]

// converting all names to uppercase
console.log(persons.map((person) => person.name.toUpperCase()))