const express = require("express");
const app = express();
const feedback = require("./src/Routes/contact")


// Middleware setup
app.use(express.json());

app.use("/api/v1/profile/contactme", feedback);

module.exports = app;
