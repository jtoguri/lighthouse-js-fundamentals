const range = function(start, end, step) {
  let arrayInstance = [];
  
  //Return an empty array if given incorrect parameters
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return arrayInstance;
  }

  //Start the array with the argument provided for the start parameter, then push each value to the array after adding the step
  let i = start;
  while(i <= end) {
    arrayInstance.push(i);
    i += step;
  }
  
  return arrayInstance;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));