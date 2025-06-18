export {};
/**
 * Annotazione del tipo: specifico manualmente il tipo della variabile
 */

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classi
class Car {}
let car: Car = new Car();

// Oggetti
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Funzioni
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
