import express from "express";
import "dotenv/config";
import productsRoute from "./components/products/products.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Benvenuto!");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.use("/products", productsRoute);

app.use((req, res) => {
  res.status(404).send("Pagina non trovata");
});

app.listen(process.env.PORT, () => {
  console.log(`Server in ascolto ${process.env.PORT}`);
});
