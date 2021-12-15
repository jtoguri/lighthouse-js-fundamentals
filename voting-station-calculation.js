//Write a function called chooseStation(stations) that takes in an array of possible voting stations, 
//and only returns the names of the stations that meet the criteria

//The function will receive an array of stations, where each station itself is an array
//with a name, a capacity, and a venue type

//Criteria: 
//capacity of at least 20
//be a school or community centre

const chooseStations = function(stations) {
  let goodStations = [];
  for (let i = 0, n = stations.length; i < n; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));