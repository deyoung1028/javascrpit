//Palindrome App ~ reverse string methond run a loop in reverse order, study

function palindrome(str) {
    let reversedString = ""
    for (let index = str.length -1; index >=0; index--) {
        reversedString = reversedString + str[index];
    }
    if (reversedString === str) {
        return true
    } else {
        return false
    }
}
console.log(palindrome("cat"))
console.log(palindrome("noon"))

//   console.log(palindrome("dog"))
    

// Remove Duplicate from an array

let friends = ["Katie","Karen", "Karen", "Erica", "Morgan"];
let unique = [... new Set(friends)];
console.log(unique)

// Create an app which returns true/false depending on if the item is in the array go back and try with a for loop

let myArray = ["Milo","Tabitha","Bella","Charlie"];
// myArray.includes("Milo");
// console.log(myArray.includes("Milo"))
// console.log(myArray.includes("max"))

function isInArray(item) {
    for (let i = 0; i <myArray.length; i++) {
        if(myArray[i] === item) {
            return true
        }else {
            return false
        }
        
    }
}

console.log(isInArray("Milo"))
console.log(isInArray("max"))

// Create an app that finds the largest # in an array
let array = [10, 12, 28, 40];
let largest = 0;
    for(let i = 0; i <array.length; i++) {
        if(largest < array[i]) {largest = array[i]}
    }

console.log(largest)

// Create an app that finds the smallest # in an array

let arr = [10, 12, 28, 40]

function smallestNum(arr) {
    const sortedArr = arr.sort((a,b) => a - b)

    return sortedArr
}
    
console.log(smallestNum(arr))

// Create FizzBuzz app


function fizzBuzz (number) {
    if (number % 3 == 0 && number %5 == 0) {
        return "Fizz Buzz"
    }
    else if (number % 3 == 0) {
        return "fizz"
    }
    else if (number % 5 == 0) {
        return "buzz"
    } else {
        return "This number is not divisible by 3 or 5"
    }

}

console.log(fizzBuzz(15))
console.log(fizzBuzz(9))
console.log(fizzBuzz(10))
console.log(fizzBuzz(2))


// Create an Even/Odd app

function evenOrOdd(number) {
    if(number % 2 == 0) {
        return "Your number is even."
    } else {    // ask why the else has to go infront of the {} . Is this a convention or syntax?
        return "Your number is odd"
    }
}

console.log(evenOrOdd(4))
console.log(evenOrOdd(44))
console.log(evenOrOdd(51))

// Ascending/Descending order app

let numbers = [3, 4, 56, 7, 8, 1]

function sortAscending(numbers) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] < numbers[j]){
                let temp = numbers[j]
                numbers[j]=numbers[i]
                numbers[i] = temp 
            }
        }

    }
    return numbers
}

console.log("Ascending order: "+sortAscending(numbers))


function sortDescending(numbers) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] > numbers[j]){
                let temp = numbers[j]
                numbers[j] = numbers[i]
                numbers[i] = temp
            }
        }
    }
    return numbers
}

console.log("Descending order: "+sortDescending(numbers))

// Bank Account

class BankAccount {
    constructor(firstName, lastName, accountType, balance) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = null
        this.accountType = accountType
        this.balance = balance
        this.status = null

    }

    open() {
        if(this.balance > 100) {
            this.status = "Opened";
        }else{
            return "Insufficient Funds for Opening Account";
        }
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log("Insufficient Funds");
            if (this.balance < 0) {
                console.log("You are overdrawn, and will incur a $35 fee");
                this.balance -= 35;
            }
        }else {
            this.balance -= amount;
        }
    }
    transfer(account, amount) {
        if(amount > this.balance) {
            return "Insufficient Funds";
        }else{
            this.balance -= amount;
            account.balance += amount;
        }
    }
}

let firstAccount = new BankAccount("Jennifer", "DeYoung", "Checking",100)
let secondAccount = new BankAccount("Jennifer", "DeYoung", "Savings", 250)

firstAccount.open()
firstAccount.deposit(50)
firstAccount.withdraw(350)
firstAccount.transfer(secondAccount,100)

console.log(firstAccount.balance)
console.log(secondAccount.balance)