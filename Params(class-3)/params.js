const express = require("express");

const app = express();

let users = [
  {
    id: 1,
    name: "Anish patel",
    age: 20,
  },
  {
    id: 2,
    name: "raju",
    age: 24,
  },
  {
    id: 3,
    name: "Babu",
    age: 18,
  },
];

// app.get("/users/:id/:name", (req, res) => {
//   let userId = req.params.id;
//   let name = req.params.name;
//   console.log(userId);
//   console.log(name);
// });

// app.get("/users/:id/username/:username", (req, res) => {
// //   let userId = req.params.id;
// //   let username = req.params.username;
//   let { id, username } = req.params;

//   console.log(id);
//   console.log(username);
// });

/**
 * add new user with property id, name and age
 * endPoint :/adduser
 * name,age--> params *
 */

// app.get("/addusers/:name/:age", (req, res) => {
//   let { name, age } = req.params;
//   let id = Math.random;
//   let newUser = {
//     id: id,
//     name: name,
//     age: age,
//   };
//   users.push(newUser);
//   res.json(users);
// });

/**
 * to delete the added user
 */

// app.get("/deleteuser/:id", (req, res) => {
//   let id = req.params.id;
//   let length = users.length;
//   let updatedUser = users.filter((user) => {
//     return user.id != id;
//   });
//   if (length == updatedUser.length) {
//     return res.send("user not found");
//   }
//   users = updatedUser;
//   res.json(users);
// });

app.get("/deleteuser", (req, res) => {
  const { id, name, age } = req.query;
  let length = users.length;
  for (let i = 0; i < length; i++) {
    if (users[i].id == id) {
      users[i].name = name;
      users[i].age = age;
    }
  }
  return res.json(users);
});
let PORT = 5001;
app.listen(PORT, () => {
  console.log(`server is listening`);
});