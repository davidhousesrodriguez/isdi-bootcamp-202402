const fs = require("fs");

console.log("start");

try {
  fs.readFile("./users.json", "utf8", (error, usersJson) => {
    if (error) {
      console.error(error);

      return;
    }

    const users = JSON.parse(usersJson);

    const user = {
      name: "Maria Revuelta",
      birthdate: "2012-01-01",
      email: "maria@revuelta.com",
      username: "larevu",
      password: "123qwe123",
      status: "offline",
      id: "3gfcipdb0c",
    };

    users.push(user);

    const usersJson2 = JSON.stringify(users);

    fs.writeFile("./users.json", usersJson2, (error) => {
      if (error) {
        console.error(error);

        return;
      }

      console.log("end");
    });
  });
} catch (error) {
  console.error(error);
}

console.log("continue...");
