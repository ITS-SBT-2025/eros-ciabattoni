// Caso 1: variabile dichiarata e inizializzata successivamente
let words = ["red", "green", "blue"];
let foundWord;

for (const word of words) {
  if (word === "green") {
    foundWord = true;
  }
}

// Caso 2: ho una funzione che ritorna il tipo any
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
