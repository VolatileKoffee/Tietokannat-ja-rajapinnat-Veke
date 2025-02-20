const mysql = require("mysql2");
const connection = mysql.createPool({
  host: "localhost",
  user: "netuser",
  password: "netuser123",
  database: "tietokantayhteys17",
});
module.exports = connection;

/*
According to the Tutorial, the localhost address is:
ipv4: 127.0.0.1
ipv6: ::1
*/
