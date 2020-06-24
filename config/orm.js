const connection = require("./connection");
let orm = {
  selectAll: () => {
    let query = "SELECT * FROM burgers";
    connection.connect(query, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  insertOne: (burger, eaten) => {
    let query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
    connection.connect(query, [burger, eaten], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  updateOne: (id) => {
    let query = `SELECT id, burger_name, devoured FROM burgers WHERE id = ?; UPDATE burgers SET devoured = true WHERE id = ?`;
    connection.connect(query, [id, id], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
};
