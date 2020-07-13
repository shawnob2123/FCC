// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  
  let trueValues = arr.filter(function bouncer(arr) {

    return arr;
    
  })

  return trueValues;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]) // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) // should return [].
bouncer([null, NaN, 1, 2, undefined]) // should return [1, 2].
