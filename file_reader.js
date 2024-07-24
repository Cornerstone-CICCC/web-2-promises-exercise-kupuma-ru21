const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile("firstname.txt", "utf8")
  .then((firstname) => {
    return fs
      .readFile("lastname.txt", "utf8")
      .then((lastname) => ({ firstname, lastname }));
  })
  .then(({ firstname, lastname }) => {
    return fs
      .readFile("age.txt", "utf8")
      .then((age) => ({ firstname, lastname, age }));
  })
  .then(({ firstname, lastname, age }) => {
    return fs
      .readFile("hobbies.txt", "utf8")
      .then((hobbies) => ({ firstname, lastname, age, hobbies }));
  })
  .then(({ firstname, lastname, age, hobbies }) => {
    hobbies = JSON.parse(hobbies);
    console.log(
      `${firstname.trim()} ${lastname.trim()} is ${age.trim()} years old and his hobbies are ${
        hobbies[0]
      } and ${hobbies[1]}`
    );
  })
  .catch((err) => {
    console.error("Error reading files:", err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles() {
  try {
    const [firstname, lastname, age, hobbies] = await Promise.all([
      fs.readFile("firstname.txt", "utf8"),
      fs.readFile("lastname.txt", "utf8"),
      fs.readFile("age.txt", "utf8"),
      fs.readFile("hobbies.txt", "utf8"),
    ]);

    const parsedHobbies = JSON.parse(hobbies);
    console.log(
      `${firstname.trim()} ${lastname.trim()} is ${age.trim()} years old and his hobbies are ${
        parsedHobbies[0]
      } and ${parsedHobbies[1]}`
    );
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

readFiles();
