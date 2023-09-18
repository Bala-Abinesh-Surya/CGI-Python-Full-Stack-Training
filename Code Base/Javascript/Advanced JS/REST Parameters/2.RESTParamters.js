function multiply(multiplier, ...elements){
    return elements.map((element) => multiplier * element)
}

console.log(multiply(10, 1, 2, 4, 5, 5, 7))
// o/p : [10, 20, 40, 50, 60, 70]