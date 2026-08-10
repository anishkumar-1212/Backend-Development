let userStr = String({ name: "Anish" });

let userjsonObject = JSON.stringify({ name: "Anish" }); // it convert the object into string if we convert it using direct string then we wont be able to access keys
console.log(userjsonObject.name);

let userObject = JSON.parse(userjsonObject); //it convert the strign into object it comes under the (JSON).

console.log(userObject.name);
