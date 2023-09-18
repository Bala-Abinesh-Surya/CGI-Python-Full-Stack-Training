const object = {
    name: 'Bala Abinesh Surya',

    regularFunction: function(){
        // here this refers to the global context (i.e, properties of the object)
        return this.name
    },

    arrowFunction: () => {
        // here this refers to the current context of the function
        // i.e, context is b/w line number 9 to 13
        return this.name
    }

    // Note:
    // If we want the this keyword to refer to the function context, we have tp use arrow function
    // If we want the this keyword to refer to the global context, we have to use regular function
}

console.log(object.regularFunction()) // Bala Abinesh Surya
console.log(object.arrowFunction()) // undefined