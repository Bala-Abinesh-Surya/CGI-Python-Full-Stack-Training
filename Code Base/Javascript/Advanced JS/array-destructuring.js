array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [x, y, z, ...remaining] = array

console.log(x) // 1
console.log(y) // 2
console.log(z) // 3
console.log(remaining) // [4, 5, 6, 7, 8, 9, 10]