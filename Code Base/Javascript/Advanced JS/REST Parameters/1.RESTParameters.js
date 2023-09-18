// when we are not sure about the number of arguments to have in a function, we use Rest Parameters
function restParameters(a, b, c, ...manyMoreArguments){
    console.log('a ', a)
    console.log('b ', b)
    console.log('c ', c)
    console.log('Remaining arguments : ', manyMoreArguments)
}

restParameters(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)