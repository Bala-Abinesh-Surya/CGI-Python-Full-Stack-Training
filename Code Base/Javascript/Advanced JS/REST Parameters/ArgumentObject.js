function hi(){
    console.log(arguments)
}

// even though, hi() does not have any arguments
// we can pass as many arguments as we want
// it is possible because of the REST parameters
hi(9, 0, 10, 99)