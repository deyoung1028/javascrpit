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








