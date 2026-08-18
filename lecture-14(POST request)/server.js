const express = require("express");
const app = express();

app.use(express.json());
let allUsers = [];
/**
 * this endpoint will add new user in the database(array);
 */

app.post("/register", (req, res) => {
  let { name, email, phone, password } = req.body;
  let newUser = {
    id: Math.floor(Math.random() * 10),
    name: name,
    email: email,
    password: password,
  };
  allUsers.push(newUser);
  res.send(allUsers);
});

/**
 * the job is get all the user from the server;
 */
app.get("/getAllUser", (req, res) => {
  return res.json(allUsers);
});

/**
 * create and endpoint which fetch and user with thier id;
 */
app.get("/getperson", (req, res) => {
  const id = req.query.id;

  // Find the user with the matching ID
  const user = allUsers.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ message: "No user is found with this ID" });
  }

  return res.json(user);
});

let PORT = 4000;
app.listen(PORT, () => {
  console.log("server is listening on port 4000");
});
