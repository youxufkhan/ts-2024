import { AppDataSource } from "./data-source"
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import "reflect-metadata"

import routes from './route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at ${port}`);
});

AppDataSource.initialize().then(async () => {
  console.log("Database connected ✔")
}).catch(error => {
  console.log("Database not connected ❌")
  console.log(error)
})