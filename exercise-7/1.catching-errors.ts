/******************************************************************************************************************
 * installazione TypeScript: npm install -D typescript
 * generazione file di configurazione tsconfig.json: npx tsc --init
 * transpilling: npx tsc index.ts
 * esecuzione: node index.js (eseguo il codice JavaScript)
 * in alternativa posso usare ts-node:
 *    npm install -D tsx
 *    npx tsx index.ts (esegue direttamente TypeScript)
 */

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(add(1, 6));
// console.log(add("1", "6")); // Argument of type 'string' is not assignable to parameter of type 'number'.
