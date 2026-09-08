const express = require("express");

const app = express();

// app.get("/users", (req, res) => {
//   let name = req.query.name;
//   console.log(name);
// });
// app.get("/post", (req, res) => {
//   let id = req.query.id;
//   console.log(id);
// });

// app.get("/watch", (req, res) => {
//   let watch = req.query;
//   console.log(watch);
// });

app.get("/watch", (req, res) => {
  let videos = req.query;
  let { v, list, start_radio } = videos;
  console.log(list);
  console.log(v);
  console.log(start_radio);
});
let PORT = 5001;
app.listen(PORT, () => {
  console.log(`server is listening`);
});
