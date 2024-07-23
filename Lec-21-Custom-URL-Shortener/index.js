const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

//Connection MongooDB
connectToMongoDB("mongodb://127.0.0.1:27017/shorter-url").then(() =>
  console.log("MongoDB connnected")
);

//Middlware
app.use(express.json());

//Routes Define  --Specially this routes for creating shortID only

app.use("/url", urlRoute);

//This routes specially for after creating the shortId  to vist the sites
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        timestamp: Date.now(),
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
