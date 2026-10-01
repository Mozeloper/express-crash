
// USING NODE COMMON JS 
// const express = require("express");
// const path = require("path");
// const posts = require('./routes/posts')

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const port = process.env.PORT || 8000;

const app = express();

// GET Dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
// res.send('<h1>Hello word</h1>')
// res.send({message: 'Hello world'})
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
// res.send('<h1>About</h1>')
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Routes
app.use("/api/posts", posts);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running On PORT ${port}`);
});
