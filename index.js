const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./src/router/user");
const chalk = require("chalk");

mongoose
  .connect("mongodb+srv://Debarishi:1234@cluster0.npqrp.mongodb.net/RohanDev?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(chalk.green("Database connected"));
  })
  .catch(() => {
    console.log(chalk.red("Database Not connected"));
  });

app.use(express.json());
app.use(userRouter);

app.listen(5100, () => {
  console.log(chalk.blue("Server is up and running"));
});
