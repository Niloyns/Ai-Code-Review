const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  console.log("get rout");
  res.send("start get rout");
});

app.use("/ai", aiRoutes);

module.exports = app;
