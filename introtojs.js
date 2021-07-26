// let friends = ["Erica", "Karen", "Katie", "Morgan"]

// for (let index = 0; index < friends.length; index++) {
//   console.log(friends[index]);
// }

function add(a,b) {
  let c = a + b
  if (c <=50 || c>=80) {
      return 65
  }
  else{
      return 80
  } 
}

console.log(add(50,10))

function isVowel(letter) {
  if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    return true;
  }
  else {
    return false;
  }
}

  console.log(isVowel("z"))

