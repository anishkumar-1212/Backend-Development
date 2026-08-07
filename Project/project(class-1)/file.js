// import express from "express";
const express = require("express");
// import __dirname from "node:path";

const users = [
  {
    name: "Anish patel",
    age: 20,
  },
  {
    name: "raju",
    age: 24,
  },
  {
    name: "Babu",
    age: 18,
  },
];

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});

app.get("/users", (req, res) => {
  res.json("users");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
