// this is known as constructor function
// it is almost same as the class

// here this refers to the current instance of the Country
function Country(name, independence){
    this.name = name;
    this.independence = independence;

    this.describe = function(){
        console.log(`${this.name} got its independence on ${this.independence}`)
    }
}

country = new Country('India', 1947)
country.describe()

