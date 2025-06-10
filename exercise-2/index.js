import "dotenv/config";
import express from "express";
import pagesRoutes from "./components/pages/pages.route.js";
import productsRoutes from "./components/products/products.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log("middleware 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("middleware 2");
//   next();
// });

app.use("/products", productsRoutes);
app.use(pagesRoutes);

app.use((req, res) => {
  res.status(404).send("Pagina non trovata.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
