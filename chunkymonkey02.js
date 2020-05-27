// 2.0

function chunkArrayInGroups(arr, size) {
  let chunkArray = []
  let tempArray = [...arr];

  for (let i = 0; i < arr.length / size; i++) {
    chunkArray.push(tempArray.splice(0, size)); //tempArray is going into chunkArray [7,3] 
  }
  console.log(chunkArray);
}



// 3.0

function chunkArrayInGroups02(arr, size) {
    const chunkArray = [];
    let i = 0;
    while (i < arr.length) {

      chunkArray.push(arr.slice(i, i + size));
      i += size;
    }
    console.log(chunkArray);


}

chunkArrayInGroups02([7, 3, 11, 21, 9, 4, 6, 9, 8, 12, 77, 69, 88], 2);
  