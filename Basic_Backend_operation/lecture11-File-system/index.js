// let fs = require("fs").promises;

const { readFile } = require("fs/promises");

// fs.readFile("notes.txt", "utf-8")
//   .then((data) => {
//     return fs.writeFile("notes.txt", data + "\n" + "kjwkdnjwdnwdwddl");
//   })
//   .then((data) => {
//     console.log("file is written");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let fs = require("fs").promises;

let data=await fs.readFile("notes.txt","utf-8");
await fs.writeFile("notes.txt",data+"\n"+"by async await");
console.log(data);








