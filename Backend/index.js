const express = require('express');
const cors = require('cors');
const dbConnect = require('./dbconfig/dbconnect');
const userRoute = require('./routes/userRoute');
const propertyRoute = require('./routes/propertyRoute');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/user",userRoute);
app.use("/prop",propertyRoute);

app.get("/", (req, res) => {
    return res.json({ message: "hello" });
});

dbConnect()
  .then(() => {
    app.listen(port);
    console.log(`Server running and db connected at port ${port}!`);
  })
  .catch(() => {
    console.log("Server not running !");
  });