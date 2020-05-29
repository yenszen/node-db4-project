const express = require("express");
const recipesRouter = require("./recipes/recipesRouter");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
