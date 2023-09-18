let x = 10;
var y = 0;

if (true){
    let x = 6;
    var y = 15;

    console.log(x); // output : 6
}

console.log(x);
// output : 10
// the output is not 6 because the scope of let is only within that block

console.log(y);
// output : 15
