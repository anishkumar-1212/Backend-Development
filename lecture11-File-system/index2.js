const { myReadFile, myWriteFile } = require("./fileSystemModule");

async function work() {
  try {
    let data = await myReadFile("notes.txt", "utf-8");
    await myWriteFile("notes.txt", data + "\n" + "filesystem in nodejs");
    console.log("file is written");
  } catch (err) {
    console.log(err);
  }
}

work();