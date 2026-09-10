const express = require("express");
const app = express();
app.use(m3);
app.use(m1);

app.get("/", (req, res, next) => {
  res.send("hello");
  console.log("hello is running");
  next();
});
// app.use(m2);

app.get("/about", m1, (req, res, next) => {
  // if (userid) {
  //   console.log("userid exists");
  // }
  res.send("about page");
  console.log("about is running");
  next();
});

//Application level middleware
function m1(req, res, next) {
  console.log("m1 is running");
  req.userid = 1; // setting the userid(modifying..)
  next();
}

function m2(req, res, next) {
  console.log("m2 is running");
  next();
}

function m3(req, res, next) {
  console.log("m3 is running");
  next();
}

app.listen(3001, () => {
  console.log("server is listening on port number localhost:3001");
});
