// fibonacci series using a loop
// 0 1 1 2 3 5 8 13 21 34 55 ....
number = 20;

var first = 0;
var second = 1;

console.log(first);
console.log(second);

for(let i = 2; i <= number; i++){
    console.log(first + second);

    let third = first;
    first = second;
    second = third + second;
}