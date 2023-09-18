const car = {
    name: 'Swift',
    brand: 'Maruti Suzuki',

    displayDetails: function(){
        console.log(`Name : ${this.name} Brand : ${this.brand}`)
    }
}

// car.displayDetails()

// copying the method
// var method = car.displayDetails;
// method()

// above code will not work
// we have to use a special method called bind()
var method = car.displayDetails.bind(car)
method()