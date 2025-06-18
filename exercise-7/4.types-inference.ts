export {};
/**
 * Inferenza del tipo: TypeScript deduce in automatico il tipo della variabile
 */

let apples = 5;
let speed = "fast";
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

let now = new Date();

// Array
let colors = ["red", "green", "blue"];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];

// Classi
class Car {}
let car = new Car();

// Oggetti
let point = {
  x: 10,
  y: 20,
};

// Funzioni
const logNumber = (i: number) => {
  console.log(i);
};
