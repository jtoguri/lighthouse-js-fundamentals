// Write a function to determine how many containers of maple syrup can be filled and sent to Mars
// A container can hold exactly 100 bottles of maple syrup, and will only be sent if it's full
// Essentially need to determine how many hundreds can be made from a number

const howManyHundreds = function (num) {
  let container = Math.floor(num / 100);
  return container
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);