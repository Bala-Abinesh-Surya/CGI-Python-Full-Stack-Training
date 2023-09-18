// in nested objects, this refers to the current scope 
// means, it refers to the properties of the object in which it is used
const india = {
    name: 'India',
    independenceOn: 1947,

    hi(){
        // this refers to the properties of the india object
        console.log(this.name)
    },


    // nested object
    details: {
        flag: 'Trocolored',
        currency: 'INR',

        describe(){
            // this refers to the properties of the details object
            return `India has ${this.flag} and its currency is ${this.currency}`
        }
    }
}

console.log(india.details.describe())
india.hi()