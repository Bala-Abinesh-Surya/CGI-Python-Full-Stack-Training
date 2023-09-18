// we have two syntax to create an array
let array = new Array();
let array1 = [];

// creating an array and initialising with the elements
let team = ['Rohit', 'Gill', 'Kohli', 'Iyer', 'Kishan'];

// modifying the elements in the array
team[0] = 'Rohit Sharma'
team[1] = 'Shubman Gill'

// adding a new team member
team[5] = 'Hardik'

// printing the elements in the array 
// this loop does none other than just iterating through all the elements 
for (player of team){
    console.log(`Player : ${player}`)
}

// Note:
// if we want flexibility in iterating through the elements
// say, only half of the elements is enough or start iterating from backwards or from the middle
// we use the regular for loop
// for (let i = 0; i < team.length; i++)

// printing the length of the array
console.log(team.length)
