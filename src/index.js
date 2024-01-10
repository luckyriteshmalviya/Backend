import bodyParser from "body-parser";
import express from "express"
import { network } from "./crudServices/routes.js";

const app = express()
const port = 1000;

app.use(bodyParser.json())

app.use("/crud", network)

app.listen(port, ()=>console.log("crud run sucessfully"))