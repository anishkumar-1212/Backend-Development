const mongoose = require("mongoose");
const express = require("express");

const blogModel = require("./model/blogmodel");
const userModel = require("./model/usermodel");

const app = express();

app.use(express.json());

// API to create user
app.post("/user/addnewuser", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await userModel.create({
      name,
      email,
      password,
    });

    res.status(201).json(newUser);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// API to add new blog
app.post("/blog/newblog", async (req, res) => {
  try {
    const { title, author, body, userId } = req.body;

    const newBlog = await blogModel.create({
      title,
      author,
      body,
      userId,
    });

    res.status(201).json(newBlog);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


mongoose
  .connect("mongodb://127.0.0.1:27017/mappingClass")
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });


app.listen(5001, () => {
  console.log("Server is listening on http://localhost:5001");
});