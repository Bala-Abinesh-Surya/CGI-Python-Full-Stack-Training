// removing duplicates from an array
let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 8, 9, 99, 99, 8, 0];
let temp = [];
let ans = [];

array.map((element) => {
    if(! temp.includes(element)){
        temp.push(element);
        ans.push(element);
    }
})

console.log(`Duplicate array : ${array}`)
console.log(`Without duplicates : ${ans}`)