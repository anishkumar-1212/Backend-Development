let fs = require("fs");

let name = process.argv[2];
let age = process.argv[3];
let newUser = [
  {
    name: name,
    age: age,
  },
];

fs.readFile("userdata.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  let users = [];
  if (data.length > 0) {
    users = JSON.parse(data); //[]
  }
  users.push(newUser);
  fs.writeFile("userdata.txt", JSON.stringify(users), (err) => {
    if (err) console.log(err);
    console.log("users added in the file userdata.txt successfully");
  });
});
