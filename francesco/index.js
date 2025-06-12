import express from "express";
import "dotenv/config";
import productsRouter from "./components/products/products.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("BENVENUTO.");
});

app.get("/about", (req, res) => {
  res.status(200).send("PAGINA ABOUT.");
});

app.use("/products", productsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
