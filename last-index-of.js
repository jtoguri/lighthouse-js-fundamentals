//Function that takes an array of numbers and a specific value as inputs, returns the index for the
//last time the value appears in the array
const lastIndexOf = function(numberList, value) {
  //Return -1 if the value does not appear in the array
  let a = -1;

  //Loop over the array, checking for numbers equal to the given value
  for(let i = 0, n = numberList.length; i < n; i++) {
    if (numberList[i] === value) {
      a = i;
    }
  }

  return a;
}

//Check statements
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);