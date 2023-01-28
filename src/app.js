import express from "express";
import bodyParser from "body-parser";
import { logger } from "./lib";
import dictionaryRoutes from "./dictionary-routes";

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use(express.static("./client"));
app.use("/dictionary", dictionaryRoutes);

export default app;
