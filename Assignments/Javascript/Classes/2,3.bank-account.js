class BankAccount{
    constructor(accountHolderName, balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
        console.log(`Rs.${amount} got deposited. Final balance : Rs.${this.balance}`);
    }

    withdraw(amount){
        if(amount > this.balance) console.log('Insufficient balance!')
        else{
            this.balance = this.balance - amount;
            console.log(`Rs.${amount} got withdrawn. Final balance : Rs.${this.balance}`);
        }
    }

    checkBalance(){
        console.log(`Account balance : Rs.${this.balance}`);
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountHolderName, balance){
        super(accountHolderName, balance);
    }

    interestCalculator(p, rate, time){
        return `The interest for the period is ${p*rate*time/100}`
    }
}

// creating a savings account
let savings = new SavingsAccount('Bala Abinesh Surya', 10000);
console.log(savings.interestCalculator(10000, 6, 5));
