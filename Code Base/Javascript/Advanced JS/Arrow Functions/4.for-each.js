const persons = [
    {name: 'Bala Abinesh Surya', age: 21},
    {name: 'Asir Paul', age: 22},
    {name: 'Ebinesh', age: 22},
    {name: 'Dany', age: 27},
    {name: 'Ajin', age: 29},
    {name: 'Jeya Hari', age: 29},
]

// iterating through the elements of the array using forEach
// unlike other methods (map, filter, reduce), forEach does notg return anything
// it just performs an operation on all the array elements

// similar to for loop
persons.forEach((person) => console.log(`Name : ${person.name} and Age : ${person.age}`))

