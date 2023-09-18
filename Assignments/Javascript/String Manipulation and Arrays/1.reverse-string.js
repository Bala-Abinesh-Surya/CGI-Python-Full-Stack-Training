var string = 'Bala Abinesh Surya';
var temp = '';

for (i = 0; i <string.length; i++){
    temp = string.charAt(i) + temp
}

console.log('Original string : ' + string);
console.log('Revered string : ' + temp);