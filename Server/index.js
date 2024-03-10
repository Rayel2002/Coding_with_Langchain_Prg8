import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import chatLLMRouter from "./routes/gpt.routes.js";
import cors from "cors";

const app = express();
const httpPort = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", chatLLMRouter);

app.listen(httpPort, () => {
  console.log("started");
});
