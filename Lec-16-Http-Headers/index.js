const express = require("express");
const users = require("./MOCK_DATA (1).json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//Middleware  -plugins
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.method}:${req.path}`,
    (err, data) => {
      next();
    }
  );
  next();
});
app.use((req, res, next) => {
  console.log("Hello From Middleware 2", req.myUserName);
  next();
});

//REST API   -> This route is {"/api/users"} define for client side rendering
app.get("/api/users", (req, res) => {
  // res.setHeader("X-MyName", "ShivCHar-barai");// setting headers inside response {Always add X to Custom headers --best practice to write X-}
  console.log(req.headers); // finding headers which is set by request
  return res.json(users);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
