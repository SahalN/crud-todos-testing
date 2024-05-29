/** @format */

import bodyParser from "body-parser";
import express from "express";

import todoRoutes from "./routes/todos";

const app = express();
app.use(bodyParser.json());
app.use(todoRoutes);

const port: number = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
