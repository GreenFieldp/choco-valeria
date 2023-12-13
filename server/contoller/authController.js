// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('../database/index.js');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const result = await db.queryAsync(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );

    console.log('Insert result:', result);
    res.json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Retrieve user from the database based on the username
    const userResult = await db.queryAsync('SELECT * FROM users WHERE username = ?', [username]);

    if (userResult.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const user = userResult[0];

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Create a JWT token for authentication
    const token = jwt.sign({ userId: user.id, username: user.username }, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
