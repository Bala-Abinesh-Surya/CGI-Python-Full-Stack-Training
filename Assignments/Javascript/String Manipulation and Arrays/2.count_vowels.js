var vowels = ['a', 'e', 'i', 'o', 'u'];
var string = 'Bala Abinesj Surya';

let count = 0;

for(i = 0; i <= string.length; i++){
    if(vowels.includes(string.charAt(i).toLowerCase())){
        count = count + 1;
    }
}

console.log('String : ', string);
console.log('Number of vowels : ', count);