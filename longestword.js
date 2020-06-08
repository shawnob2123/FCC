function findLongestWordLength(str) {
        
  let wordArray = str.split(' '); // separate each word in the sentence at every space, using a space within the parentheses
  let count = 0; // initiate a variable to count through the words during iteration

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > count) {
      count = wordArray[i].length;
    }
  }

  return count;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
