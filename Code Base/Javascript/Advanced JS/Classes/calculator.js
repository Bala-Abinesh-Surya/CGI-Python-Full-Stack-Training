class Calculator{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    add(){
        return this.a + this.b;
    }

    subtract(){
        return this.a - this.b;
    }

    multiply(){
        return this.a * this.b;
    }

    divide(){
        return this.a / this.b;
    }
}

let calci = new Calculator(10, 10);
console.log('Addition : ' + calci.add());
console.log('Subtraction : ' + calci.subtract());
console.log('Multiplication : ' + calci.multiply());
console.log('Division : ' + calci.divide());