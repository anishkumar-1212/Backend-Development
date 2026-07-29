const fs = require("fs");
fs.writeFile(
  "notes.txt",
  {
    encoding: "utf-8",
  },
  function (err, data) {
    if (err) return console.log(err);
    console.log(data);
  },
);
