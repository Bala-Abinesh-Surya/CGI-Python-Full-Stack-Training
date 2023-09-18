// here this refers to the peoperties within the object (current scope)
const india = {
    name: 'India',
    independenceOn: 1947,

    // object method
    describe(){
        console.log(`${this.name} got its independence on ${this.independenceOn}`);
    }
}

india.describe()