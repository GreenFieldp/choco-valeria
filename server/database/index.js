// database/index.js

const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) console.log('Error connecting to the database', err);
  else console.log('Database connection established');

  // Load and execute the schema SQL
  const schemaFilePath = path.join(__dirname, 'schema.sql'); // Update the filename if necessary
  const schemaSql = fs.readFileSync(schemaFilePath, 'utf8');
  connection.query(schemaSql, (err, results) => {
    if (err) {
      console.error('Error executing schema:', err);
    } else {
      console.log('Schema executed successfully');
    }
  });
});

const db = {
  queryAsync: (query, values) => {
    return new Promise((resolve, reject) => {
      connection.query(query, values, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },
};

module.exports = {
  db,
};

