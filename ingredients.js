const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
let n = ingredients.length;
while(i < n) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(let i = 0, n = ingredients.length; i < n; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let n = ingredients.length - 1, i = 0; n >= i; n--) {
  console.log(ingredients[n]);
}