const express = require("express");
const userRouter = require("./routes/userRoute");
const { connectMongoDb } = require("./Connection");

const app = express();
const PORT = 8000;

app.use(express.json());

//Connnection to mongoodb
connectMongoDb("mongodb://127.0.0.1:27017/youtube-learnNodejs-1");

//Middleware  -plugins
app.use(express.urlencoded({ extended: false }));

//Routes --->from {routes folder}
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
