function mutation(arr) {
  let oldWord = arr[1].toLowerCase(); 
  let newWord = arr[0].toLowerCase();
  for (let i = 0; i < oldWord.length; i++) { 
    if(newWord.indexOf(oldWord[i]) < 0) 
     return false;
  } 
  return true;
} 

console.log(mutation(["booger", "sugar"])); //returns false
console.log(mutation(["Arnellism", "Arnell"])); //returns true