class Palindrome{
    constructor(string){
        this.string = string.toLowerCase();

        this.palindromeChecker();
    }

    palindromeChecker(){
        let start = 0;
        let end = this.string.length-1

        while(start < end){
            if(this.string.charAt(start) != this.string.charAt(end)){
                console.log(`String ${this.string} is not a palindrome`);
                return;
            }

            start++;
            end--;
        }

        console.log(`String ${this.string} is a palindrome`);
    }
}

p1 = new Palindrome('Surya');
p2 = new Palindrome('Madam');