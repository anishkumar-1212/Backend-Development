// program to read two different files which is file1 and file2 and finally write it in file 3.

const fs = require("fs");

fs.readFile("notes1.txt", "utf8", (err, data1) => {
  if (err) throw err;

  fs.readFile("notes2.txt", "utf8", (err, data2) => {
    if (err) throw err;

    const finaldata = data1 + data2; // we can direclty add data1 and data2 using concatanation. (string me lagta hai);

    fs.writeFile("notes3.txt", finaldata, "utf8", (err) => {
      if (err) throw err;
      console.log("Files combined successfully!");
    });
  });
});
