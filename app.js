import express from "express";
import { engine } from "express-handlebars";
import fs from "node:fs";

// Handlebars Objects

const homeObj = JSON.parse(fs.readFileSync("./json/home.json"));
const twoObj = JSON.parse(fs.readFileSync("./json/page2.json"));
const threeobj = JSON.parse(fs.readFileSync("./json/page3.json"));
const fourObj = JSON.parse(fs.readFileSync("./json/page4.json"));
const finalObj = JSON.parse(fs.readFileSync("./json/final.json"));

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", homeObj);
});

app.post("/two", (req, res) => {
  res.render("page2", twoObj);
});

app.get("/two", (req, res) => {
  res.render("page2", twoObj);
});

app.post("/three", (req, res) => {
  res.render("page3", threeobj);
});

app.get("/three", (req, res) => {
  res.render("page3", threeobj);
});

app.post("/four", (req, res) => {
  res.render("page4", fourObj);
});

app.post("/final", (req, res) => {
  res.render("final", finalObj);
});

app.listen(port, () => {
  console.log(`Active On Port ${port}`);
});
