const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "study",
  password: "qlalfqjsgh7!",
});

module.exports = pool.promise();
