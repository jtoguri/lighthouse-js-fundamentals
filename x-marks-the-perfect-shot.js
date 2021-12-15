// implement function finalPosition(moves)
// it will calculate the position of the parade based on an array of directional moves on an (x,y) grid
// the array of moves will be strings that say north, south, west and east

const finalPosition = function (moves) {
  let position = [0, 0];
  for (let move of moves) {
    switch (move) {
      case 'north':
        position[1] += 1;
        break;
      case 'east':
        position[0] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
      case 'west':
        position[0] -= 1;
        break;
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));