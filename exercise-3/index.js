import "dotenv/config";
import express from "express";
import productsRoutes from "./components/products/products.route.js";
import usersRoutes from "./components/users/users.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
