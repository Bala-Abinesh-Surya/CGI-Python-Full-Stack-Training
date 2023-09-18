// chunking an array into number of parts 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chunk = 9;

var ans = [];

let start = 0;
let end = chunk;

if(chunk > array.length){
    ans.push(array.slice(start))
}
else{
    while(end <= array.length){
        ans.push(array.slice(start, end))
    
        // incrementing start and end index
        start = end;
        end = end + chunk;
    }
    
    if(start != array.length){
        // still some part of the array is left to the sliced
        ans.push(array.slice(start))
    }
}

console.log(ans)
