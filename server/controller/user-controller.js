import bcrypt from 'bcrypt';
import User from '../model/user.js';
import jwt from 'jsonwebtoken'

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
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

  res.status(200).json({ token });
};


export const signupUser = async (request, response) => {
  try {
    // Generate a salt and hash the password
    const hashedPassword = await bcrypt.hash(request.body.password, 10); // 10 is the number of salt rounds

    // Create a new user document
    const newUser = new User({
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    });

    // Save the user document to the database
    await newUser.save();

    return response.status(200).json({ msg: 'Signup successful' });
  } catch (error) {
    console.error('Error while signing up the user:', error);
    return response.status(500).json({ msg: 'Error while signing up the user' });
  }
};
