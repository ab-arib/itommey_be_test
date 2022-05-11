const express = require("express");
const app = express();
const router = require("./routers");
const cors = require("cors");

// cors handler
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

module.exports = app;