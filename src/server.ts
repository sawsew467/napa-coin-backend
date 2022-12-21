//dotenv
require('dotenv').config();

//connect BD
import { connectDB } from "./config/db";
connectDB();

const authRoute = require("./routes/authRoute")

import express from "express";
import cors from "cors";

const app = express();
const port = process.env.APP_PORT || 5000;

//cors
app.use(cors());

//bodyParser
app.use(express.json());

app.use("/api/v1/auth", authRoute)

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "OK",
    data: "Hello world",
  });
});

app.listen(port, () => {
  console.log("connected to port successfully " + port);
});
