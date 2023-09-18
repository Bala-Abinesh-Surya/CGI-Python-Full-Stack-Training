// finding the ongest word with the help of REST Parameters
function longestString(...words){
    let longest = ''

    words.forEach((word) => {
        if(word.length > longest.length) longest = word;
    })

    return longest;
}

console.log(`The longest word is : ${longestString('1', '22', '3333', '9999999999')}`)
console.log(`The longest word is : ${longestString('1', '22222222222222222', '33333333333333', '999999')}`)