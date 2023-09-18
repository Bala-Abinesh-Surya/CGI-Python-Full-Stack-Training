const car = {
    name: 'Swift',
    brand: 'Maruti Suzuki',
}

// With the call() method, you can write a method that can be used on different objects
function displayDetails(ownerName){
    console.log(`Name : ${this.name} Brand : ${this.brand} Owner : ${ownerName}`)
}

displayDetails.apply(car, ['Bala Abinesh Surya'])

// using call
displayDetails.call(car, 'Bala Abinesh Surya')
