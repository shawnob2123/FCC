
function largestOfFour(arr) {

  let largestArray = [];
  for(let i = 0; i < arr.length; i++) {
    let largestNumber = 0;

   for(let j = 0; j < arr[i].length; j++) {

      if(largestNumber < arr[i][j]) {
        largestNumber = arr[i][j];
      }
       }
       largestArray.push(largestNumber);
   }
   
// console.log(arr);
return largestArray;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
