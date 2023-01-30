import express from "express";
import bodyParser from "body-parser";
import { logger } from "./lib";
import productRoutes from "./product-routes";

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use("/products", productRoutes);

export default app;
