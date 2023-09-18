function factorial(n){
    if(n <= 2){
        return 2;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(`Factorial of 5 is : ${factorial(5)}`)
console.log(`Factorial of 4 is : ${factorial(4)}`)
console.log(`Factorial of 9 is : ${factorial(9)}`)