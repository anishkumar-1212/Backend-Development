function vote(age) {
  let p = new Promise((reject, resolve) => {
    if (age > 20) {
      return resolve("You are eligible to vote");
    }
    reject("you are not eligible to vote");
  });
  return p;
}

vote(30)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

function student(educated) {
  let promise = new Promise((resolve, reject) => {
    if (educated) {
      return resolve("you are allowed to be leader");
    }
    reject("you are not allowed to be leader ");
  });
  return promise;
}

student(false)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
