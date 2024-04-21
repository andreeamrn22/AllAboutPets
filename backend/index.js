import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv/config";
import cors from "cors";
import clientRouter from "./routes/clientRoutes.js";

let app = express();
let router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  const start = new Date().getTime();
  res.on("finish", () => {
    const duration = new Date().getTime() - start;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });
  next();
});

//de aici pun rutele mele

app.use("/api/client", clientRouter);

//pana aici
let conn;

mysql
  .createConnection({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  })
  .then((connection) => {
    conn = connection;
    return connection.query("CREATE DATABASE IF NOT EXISTS licenta");
  })
  .then(() => {
    return conn.end();
  })
  .catch((err) => {
    console.warn(err);
  });

app.listen(process.env.PORT ?? 2999, () => {
  console.log("Server running on port " + process.env.PORT ?? 2999);
});