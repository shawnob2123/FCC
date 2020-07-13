// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {

return arr.filter(func)[0]; // this is returning us an array, then access it using bracket notation 

// The filter() method returns an array containing elements of the parent array that match the set test.
}

findElement([1, 2, 3, 4], num => num % 2 === 0); // should return 8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) // should return undefined.
