function primeNumberChecker(n){
    for(i = 2; i <= n/2; i++){
        if(n % i === 0) return false;
    }

    return true;
}

console.log(`Is 10 a prime number : ${primeNumberChecker(10)}`)
console.log(`Is 5 a prime number : ${primeNumberChecker(5)}`)
console.log(`Is 11 a prime number : ${primeNumberChecker(11)}`)
console.log(`Is 25 a prime number : ${primeNumberChecker(25)}`)