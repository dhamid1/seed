import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/user.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  // Implement the login logic here
  const { username, password } = req.body;

  // Check user credentials and perform login
  try {
    // Check if the user exists and the password is correct
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // You can generate a token for authentication here if needed

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

export default router;
