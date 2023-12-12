
const mysql = require("mysql2");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) console.log("Error to connect to database", err)
  else console.log("Database connection established")
})

const db = {
  queryAsync: (query, values) => {
    return new Promise((resolve, reject) => {
      connection.query(query, values, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },
}
module.exports = {
  db,
}