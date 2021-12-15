const sumLargestNumbers = function(data) {
  let a = 0;
  let b = 0;
  for (let num of data) {
    if (num > a && num > b) {
      if (a >= b) {
        b = num;
      } else {
        a = num;
      }
    } else if (num > a) {
      a = num;
    } else if (num > b) {
      b = num;
    }
  }
  let sum = a + b;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));