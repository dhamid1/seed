// In your routes/signup.js
import express from 'express';
import User from '../model/user.js';
import bcrypt from 'bcrypt';


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


router.post('/signup', async (req, res) => {
  try {
    // Assuming you have the user data in the request body
    const { name, username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create a new user document using the User model
    const newUser = new User({ name, username, password: hashedPassword });

    // Save the user document to the database
    await newUser.save();

    // Respond with a success message
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error while creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});

export default router;
