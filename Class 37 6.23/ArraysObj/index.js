// WARMUP FROM https://codefellows.github.io/code-401-javascript-guide/curriculum/warm-ups/daily/
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

// let state = {};
// let newPeople = [];
// const newStuff = {};
let newState = {};

// SPREAD DEMOS
// [Oddie, Kookla, Fran, Ollie, Garfield]
let newPeople = ['Oddie', ...people, 'Garfield'];
console.log(newPeople);

let newStuff = { ...stuff, cars:[...stuff.cars, 'GMC'] };
console.log(newStuff);

/*
Creat a state object with keys of people and stuff that contain the people and stuff data.
Do this using object destructuring assignment
*/
let state = { stuff, people }
console.log(state)

console.log('============')

let bigState = {
  ...state,
  people: ['Oddie', ...people, 'Garfield'],
  stuff: 
  { cars: [...stuff.cars, 'GMC'] }
}

console.log(bigState);


function forLoop(arr) {

}

function whileLoop(arr) {
  // OG WAY
  // let i = 0;
  // // while( arr[i]) {
  //   while (i < arr.length) {
  //   console.log(arr[i]);
  //   i++;

  // PASS BY REF / CLONE WAY
  let internalArray = [...arr];

}

function mapLoop(arr) {

}

function map(arr, callbackFunction) {

}

function filter(arr, callbackFunction) {

}
 

console.log('forLoop')
forLoop(people);
console.log('=========')

console.log('whileLoop')
whileLoop(people);
console.log('=========')

console.log('mapLoop')
mapLoop(people);
console.log('=========')

console.log('map')
let mapped = map(people, (val, idx) => 'Rosie');
console.log('map', mapped);
console.log('=========')

let filtered = filter(people, (val, idx) => val === 'Kookla')
console.log('filter');
console.log(filtered);
console.log('=========')

console.log('PEOPLE', people);