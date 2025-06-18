export {};
/**
 * Definire sempre i tipi dei parametri in input.
 * Il tipo del valore di ritorno potrebbe essere inferito,
 * ma è consigliabile esplicitarlo sempre per evitare errore
 */

// qui sto specificando sia i tipi degli input, sia il tipo di ritorno
const add = (a: number, b: number): number => {
  return a + b;
};

// se non specifico il tipo di ritorno, TS non mi avverte di eventuali errori
// ad es. se dimentico la keyword return
const subtract = (a: number, b: number) => {
  a - b;
};
