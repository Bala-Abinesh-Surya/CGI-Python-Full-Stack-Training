let sentence = 'i am the king of the forest';
let array = sentence.split(' ');

let ans = '';

for (word of array){
    // replacing the first character of the word with the uppercase of that word
    let first = word.charAt(0);
    ans = ans + word.replace(first, first.toUpperCase()) + ' ';
}

console.log(`Original sentence : ${sentence}`);
console.log(`Title case sentence : ${ans.trim()}`)
