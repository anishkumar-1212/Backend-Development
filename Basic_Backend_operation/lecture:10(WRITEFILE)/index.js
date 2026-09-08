const fs = require("fs");
fs.writeFile("notes.txt", "tttttttt", function (err) {
  if (err) return console.log(err);
});

// let filedata = null;
fs.readFile("notes.txt", "utf-8", function (err, data) {                  //writing the code without reading the previous file. jab krenge toh purana wla delte ho jata hai isliye hmlog read kr lenge pahle and the n write krenge
  if (err) return console.log(err);
  console.log(data);
  fs.writeFile(
    "notes.txt",
    data + "/n" + "filesystem in nodesjs",
    function (err) {
      if (err) return console.log(err);
      console.log("notes is written");
    },
  );
});



// Inversion of control 



//buy-->deductamount

function buy(){
  
}