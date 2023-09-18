// here a class is present and an object is present within that class
class Mixing{
    name = 'Hello'
    hi(){
        // here this refers to the instance of the Mixing class (object)
        console.log(this.name)
    }

    describe = {
        name: 'India',
        hi(){
            // here this refers to the peroperties of the describe object
            console.log(this.name)
        }
    }
}

new Mixing().describe.hi()
new Mixing().hi()