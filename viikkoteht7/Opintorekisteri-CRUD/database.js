const mysql = require("mysql2");
const connection = mysql.createPool({
  host: "localhost",
  user: "test_user1",
  password: "salasana1",
  database: "arviointitietokanta",
});

module.exports = connection;
