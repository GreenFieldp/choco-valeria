// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/authRoutes.js');  
const authRoutes = require('./routes/authRoutes.js');
const { db } = require('./database/index.js');

// Use middleware in the correct order
app.use(cors());
app.use(bodyParser.json());

// Use the routes and pass the 'db' instance
app.use('/api', routes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

