import "dotenv/config";
import express from "express";
import productsRoutes from "./components/products/products.route.js";
import usersRoutes from "./components/users/users.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

// middleware degli errori
// si distingue dal fatto che ha 4 parametri
app.use((err, req, res, next) => {
  // se lo status dell'errore è nel range dei 4xx
  // invio in risposta i dettagli dell'errore
  if (err.status >= 400 && err.status <= 499) {
    res.status(err.status).json({ error: err.message });
  } else {
    // se lo status dell'errore non è nel range dei 4xx
    // stampo nella console i dettagli dell'errore
    // invio in risposta un messaggio generico
    console.error(err.stack);

    res.status(500).json({ error: "Qualcosa è andato storto!" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
