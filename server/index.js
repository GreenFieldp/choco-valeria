// server.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { db } = require('./database/index.js'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint for user registration
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash and salt the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)

    // Insert user into the database
    const result = await db.queryAsync(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.json({ success: true, message: 'User registered successfully' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Fetch user from the database based on the email
    const users = await db.queryAsync('SELECT * FROM users WHERE email = ?', [email])

    if (users.length === 0) {
      res.status(401).json({ success: false, message: 'Invalid email or password' })
      return
    }

    const user = users[0]

    // Check the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      res.status(401).json({ success: false, message: 'Invalid email or password' })
      return
    }

    res.json({ success: true, message: 'Login successful', user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
