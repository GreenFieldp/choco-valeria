// routes/index.js
const express = require('express');
const router = express.Router();

// Inject the database instance into the routes
module.exports = (db) => {
  // Example route using the database
  router.get('/', async (req, res) => {
    try {
      const results = await db.queryAsync('SELECT * FROM your_table');
      res.json(results);
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Add more routes here using the 'db' instance

  return router;
};
