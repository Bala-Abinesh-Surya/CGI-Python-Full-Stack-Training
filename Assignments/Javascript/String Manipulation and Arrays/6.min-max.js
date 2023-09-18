// minimum and maximum elements in an array
function minMax(array){
    let max = 0;
    let min = 0;

    array.forEach((element) => {
        if (element > max) max = element
        if (element < min) min = element
    });

    console.log(`Maxmium element : ${max}`)
    console.log(`Minimum element : ${min}`)
}

minMax([12, 333, 4, 9, 8, 12, 0, -1])