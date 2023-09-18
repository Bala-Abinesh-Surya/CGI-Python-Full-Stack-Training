/// traditional functions
function add(a, b){
    return a+b;
}

const addTwoNumbers = function(a, b){
    return a+b;
}

console.log(add(2, 5))
console.log(addTwoNumbers(2, 5))


// Arrow functions
const sum = (a, b) => a + b;

console.log(sum(10, 20))