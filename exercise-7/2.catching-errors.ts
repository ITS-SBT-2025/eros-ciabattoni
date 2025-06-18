/**
 * 1) nomi proprietà scritti male (utilizzare interface)
 * 2) invocazione funzione con proprietà invertite
 */

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((todo) => {
    const ID = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;

    console.log(`
      Il Todo con id: ${ID}
      Ha il seguente titolo: ${title}
      E' completato? ${finished}
      `);
  });
