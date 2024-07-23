const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 8000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//middleware
//urlencoded is used becze of form data parse to.
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("homepage");
});

//Defining route for uploading files
app.post("/upload", upload.single("portfileimage"), (req, res) => {
  console.log(req.body);

  console.log(req.file);
  return res.redirect("/");
});
app.listen(PORT, () => console.log(`Server Started at PORT:8000`));
