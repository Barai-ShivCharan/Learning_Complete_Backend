const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end("Hello from Homepage");
});
app.get("/about", (req, res) => {
  return res.end(`Hello ${req.query.name}`);
  // return res.end(
  //   "Hello from about-page" +
  //     " Hey from " +
  //     req.query.name +
  //     " your age is: " +
  //     req.query.age
  // );
});

app.listen(8000, () => console.log("Server Started"));
