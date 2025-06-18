export {};

// implementiamo la funzione add affinchè accetti in input sia numeri che stringhe
// se numeri fà la somma: 1 + 6 = 7
// se stringhe fà la concatenazione aggiungendo uno spazio in mezzo: 'hello' + 'world' = 'hello world'
const add = (num1: number | string, num2: number | string): number | string => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }

  return Number(num1) + Number(num2);
};

console.log(add(1, 6));
console.log(add("hello", "world"));
// console.log(add(true, false))
