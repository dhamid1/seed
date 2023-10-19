import React, { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import Images from './Images/Logo.png';
import { API } from '../../src/Pages/service/api.js';

const Component = styled(Box)`
  width: 500px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.7);
  margin-top: 75px;
`;

const Image = styled('img')({
  width: 150,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0',
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
  color: #fff;
  height: 45px;
  border-radius: 2px;
  margin-top: 10px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 45px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

export const LoginPage = () => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState({
    name: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const validateFields = () => {
    // Check if any of the fields are empty
    if (!signup.name || !signup.username || !signup.password) {
      setError('All fields are required.');
      return false;
    }
    return true;
  };

  const signupUser = async () => {
    // Validate the fields before making the signup request
    if (!validateFields()) {
      return;
    }

    try {
      let response = await API.userSignup(signup);
      console.log('API Response:', response); // Log the response
      if (response.isSuccess) {
        setError('Account created successfully.');
        setSignup({
          name: '',
          username: '',
          password: '',
        });
        toggleAccount('login');
      } else {
        setError('Something went wrong! Please try again later.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred while signing up. Please try again later. Error: ' + error.message);
    }
  };

  return (
    <Component>
      <Box>
        <Image src={Images} alt="login" />
      </Box>

      {account === 'login' ? (
        <Wrapper>
          <TextField variant="standard" label="UserName" />
          <TextField
            variant="standard"
            label="Password"
            type={showPassword ? 'text' : 'password'} // Toggle type based on showPassword state
          />
          <Button variant="contained" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} {/* Toggle button text based on showPassword state */}
          </Button>
          {error && <Error>{error}</Error>}

          <LoginButton variant="contained">Login</LoginButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <SignupButton onClick={toggleSignup}>Create an Account</SignupButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField variant="standard" onChange={onInputChange} name="name" label="Enter Name" />
          <TextField variant="standard" onChange={onInputChange} name="username" label="User Name" />
          <TextField
            variant="standard"
            onChange={onInputChange}
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'} // Toggle type based on showPassword state
          />
          <Button variant="contained" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} {/* Toggle button text based on showPassword state */}
          </Button>
          {error && <Error>{error}</Error>}
          <SignupButton onClick={signupUser}>Sign Up</SignupButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <LoginButton variant="contained" onClick={toggleSignup}>
            Already have an account
          </LoginButton>
        </Wrapper>
      )}
    </Component>
  );
};
