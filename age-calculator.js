// Create a function to determine someone's age
// Name function ageCalculator, should take 3 parameters:
// name - string representing someone's name
// yearOfBirth - int representing year of birth
// currentYear - int representing current year
// return a string saying how old the person is

const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let howOld = name + " is " + age + " years old.";
  return howOld;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));