// in classes, this refers to the current instance of the Country
// otherwise, Country object
class Country{
    constructor(name, independence){
        this.name = name;
        this.independence = independence;
    }

    describe(){
        return `${this.name} got independence on ${this.independence}`
    }
}

const india = new Country('India', 1947)
console.log(india.describe())