const express = require("express");

const app = express();
let users = [
  {
    id: 1,
    name: "Anish",
    age: 20,
  },
  {
    id: 2,
    name: "Rohit",
    age: 20,
  },
  {
    id: 3,
    name: "Lakshya",
    age: 26,
  },
];

app.get("/users", (req, res) => {
  console.log(req.query);
  let name = req.query.name;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == name) {
      return res.json(users[i]); //object hai isiliye json formate me bhej rhe hai
    }
  }
  res.send("data got " + "name: " + name);
});

app.get("/usersage", (req, res) => {
  console.log(req.query);
  let age = Number(req.query.age); ///?? query kyu use kiye
  let ageArr = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= age) {
      ageArr.push(users[i]);
    }
  }
  return res.json(ageArr);
});

let PORT = 5001;
app.listen(PORT, () => {
  console.log(`server is listening`);
});
