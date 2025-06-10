import "dotenv/config";
import express from "express";
import productsRoutes from "./components/products/products.route.js";
import usersRoutes from "./components/users/users.route.js";
import authRoutes from "./components/authentication/authentication.route.js";
import errorMiddleware from "./middleware/error.middleware.js";
import verifyToken from "./middleware/verify-token.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/products", productsRoutes);
app.use("/users", verifyToken, usersRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
