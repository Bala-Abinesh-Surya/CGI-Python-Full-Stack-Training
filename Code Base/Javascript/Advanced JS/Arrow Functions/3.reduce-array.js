const persons = [
    {name: 'Bala Abinesh Surya', age: 21},
    {name: 'Asir Paul', age: 22},
    {name: 'Ebinesh', age: 22},
    {name: 'Dany', age: 27},
    {name: 'Ajin', age: 29},
    {name: 'Jeya Hari', age: 29},
]

// calculating the average age of the persons in the array
const totalAge = persons.reduce((sum, person) => sum + person.age, 0)
console.log(`Average age of the group is ${totalAge / persons.length}`)