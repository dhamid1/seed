import bcrypt from 'bcrypt';
import User from '../model/user.js';

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
