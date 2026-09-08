/** problem:01
 * work to do:->> write this object in file classwork.txt
 */

let userObj = [
  {
    name: "Anish",
    age: 30,
  },
  {
    name: "Golu",
    age: 20,
  },
  {
    name: "Dholu",
    age: 13,
  },
];

let fs = require("fs");

/**
 * problem:02
 * Program to write the object into the file;
 *
 * output:-> got--> we can't direclty push the userObj in the classwork file cause we it would need string to write in other txt file.
 */

fs.writeFile("classworkfile.txt", JSON.stringify(userObj), (err) => {
  //here we need to convert the data into string manually if not it will get error
  if (err) return err;

  console.log("data is written succesffully");
});

/**
 * problem:03
 * Program to read the written file from the classwork and access the properties like their name, age and all;
 *
 */

// fs.readFile("classworkfile.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   let MyOutput = JSON.parse(data);
//   console.log(MyOutput.name);
//   console.log(MyOutput.age);
// });

/**
 * problem:04
 * 
 *
 *
 */
