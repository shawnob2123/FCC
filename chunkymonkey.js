function chunkArrayInGroups(arr, size) {
  let finalResult = []; // stores nested arrays
  let subArray =[]; // stores sub array that gets pushed into finalResult

  for (let i in arr) { // returning true if the property is in specified object (arr)
    if (subArray.length === size) { // if sub array = size
      finalResult.push(subArray); //push finalResult into the subArray
      subArray = []; //reset sub array
    }
    subArray.push(arr[i]) //push arr items into the sub array variable iterating
  }
  finalResult.push(subArray);
  return finalResult;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


