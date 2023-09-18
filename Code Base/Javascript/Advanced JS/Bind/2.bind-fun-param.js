const car = {
    name: 'Swift',
    brand: 'Maruti Suzuki',

    displayDetails: function(ownerName){
        console.log(`Name : ${this.name} Brand : ${this.brand} Owner : ${ownerName}`)
    }
}

// copying the function with a parameter
var method = car.displayDetails.bind(car, 'Bala Abinesh Surya')
method()