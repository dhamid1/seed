// In 'controller/auth-controller.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js';
import dotenv from 'dotenv';
 

export const logoutUser = (req, res) => {
  
  res.status(200).json({ message: 'Logged out successfully' });
};
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  // Check if the provided password matches the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Generate and send an authentication token (e.g., JWT) upon successful login

  const KEY = process.env.KEY;
  const token = jwt.sign({ userId: user._id }, KEY , { expiresIn: '1h' });

  res.status(200).json({ token });
};
