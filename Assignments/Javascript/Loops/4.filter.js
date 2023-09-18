// filtering out even and odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

for (let number of array){
    if(number % 2 === 0){
        console.log(`${number} is an even number`)
    }
    else{
        console.log(`${number} is an odd number`)
    }
}