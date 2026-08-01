let fs = require("fs");
function myReadFile(path, encoding) {
  return new Promise((resolve, reject) => {
    //read file kaam
    fs.readFile(path, encoding, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function myWriteFile(path, data) {
  return new Promise((resolve, reject) => {
    //write file kaam
    if (typeof data != String) return "string type of data is expected";
    fs.writeFile(path, data, function (err) {
      if (err) return reject(err);
      resolve("file is written");
    });
  });
}

module.exports.myReadFile = myReadFile;
module.exports.myWriteFile = myWriteFile;
