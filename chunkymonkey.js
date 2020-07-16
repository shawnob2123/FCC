function chunkArrayInGroups(arr, size) {
  let finalResult = []; // stores final array
  let subArray =[]; // stores sub array that gets pushed into finalResult

  for (let i in arr) {
    if (subArray.length === size) { //sub array = size
      finalResult.push(subArray);
      subArray = []; //reset sub array
    }
    subArray.push(arr[i]) //push arr items into the sub array variable
  }
  finalResult.push(subArray);
  return finalResult;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(["t", "l", "k", "o"], 3);
