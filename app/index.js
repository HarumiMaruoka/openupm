const express = require("express");
const bodyParser = require("body-parser");
const packageView = require("./views/packageView");
const app = express();

app.use(bodyParser.json());

// Restful
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});

// Index
app.get("/", (req, res) => {
  res.json({});
});

// Package
app.use("/package/", packageView);

module.exports = { app };
