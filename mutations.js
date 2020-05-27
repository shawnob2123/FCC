function mutation(arr) {
  let oldWord = arr[1].toLowerCase(); // the words are easier to compare when there's ALL lowercase letters to test
  let newWord = arr[0].toLowerCase(); // new word being compared to old word in lowercase letters
  for (let i = 0; i < oldWord.length; i++) { 
    if (newWord.indexOf(oldWord[i]) < 0) // returns first occurence from old word, testing the characters for each word
    //indexOf is CASE SENSITIVE 
    return false;
  }
  return true;
}

console.log(mutation(["booger", "sugar"])); //returns false
console.log(mutation(["Arnellism", "Arnell"])); //returns true
  


