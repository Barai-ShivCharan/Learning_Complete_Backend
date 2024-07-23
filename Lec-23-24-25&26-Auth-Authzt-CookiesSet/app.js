//THis is for Cookie set and Read

/** 
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

//To set cookie we have to use res.cookie with key value and for Read cookie we use req.cookies along with cookieparser
app.get("/", function (req, res) {
  res.cookie("name", "ShivCharan");
  res.send("Done!!");
});
app.get("/read", function (req, res) {
  console.log(req.cookies);
  res.send("Read Page!!");
});

app.listen(3000);

*/
/*//This for ecrypting passowrd
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
  var bcrypt = require("bcryptjs");
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("pass12345", salt, function (err, hash) {
      console.log(hash);
    });
  });
});

app.listen(3000);
*/

//This is for dcrypting the password
/*
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
  bcrypt
    .compare(
      "pass12345",
      "$2a$10$9nv9XnD9y0N0SqOQQh7TLeXXIPzgq8culwLme/9.JAneiQxOQGxsi"
    )
    .then((res) => {
      console.log(result);
      // res === true
    });
});

app.listen(3000);
*/

//For jsonwebToken
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get("/", function (req, res) {
  let token = jwt.sign({ email: "Shiv@gmail.com" }, "secret");
  res.cookie("token", token);
  res.send("done");
});
app.get("/read", function (req, res) {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
});

app.listen(3000);
