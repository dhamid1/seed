import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import Images from './Images/login-flower.png';
import { API } from '../../src/Pages/service/api.js';

const Component = styled(Box)`
  width: 500px;
  height: 600px;
  padding-top: 50px;
  margin: auto;
  border-radius: 25px;
  background-color: #f4c675;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.7);
  margin-top: 50px;
  margin-bottom: 175px;
`;


const StyledTextField = styled(TextField)`
  && {
    /* Add your custom styles here */
    font-size: 20px;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 15px;
  }
`;

const Image = styled('img')({
  width: 150,
  marginLeft: 120,
  marginBottom: 55,
  marginTop: 0,
  marginRight: 50,
  position: 'absolute',
  display: 'flex',
  padding: '0 0 0 250px',
});



const Wrapper = styled(Box)`
  padding: 110px 35px;
  margin-bottom:  20px;
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
  background: #b4c078;
  color: #fff;
  height: 45px;
  font-size: 30px;
  border-radius: 25px;
  margin-top: 10px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 45px;
  font-size: 25px;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

export const LoginPage = ({ isLoggedIn, setLoggedIn }) => {
  
  const [account, toggleAccount] = useState('login');
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  const onInputChange = (e) => {
    if (account === 'login') {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    } else {
      setSignupData({ ...signupData, [e.target.name]: e.target.value });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

<<<<<<< Updated upstream
  const validateFields = () => {
    // Check if any of the fields are empty
    if (!signup.name || !signup.username || !signup.password) {
      setError('All fields are required.');
      return false;
=======
  const handleLogin = async () => {
    try {
      const response = await API.userLogin(loginData);
  
      if (response.isSuccess) {
        setError(''); // Clear any previous error messages
        setLoggedIn(true);
  
        // Reset the login form fields by setting loginData to an empty object
        setLoginData({
          username: '',
          password: '',
        });
  
        // Redirect the user to the 'myjournal' page
        //('/myjournal');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
>>>>>>> Stashed changes
    }
    return true;
  };
<<<<<<< Updated upstream

  const signupUser = async () => {
    // Validate the fields before making the signup request
    if (!validateFields()) {
      return;
    }
=======
  
  const handleSignup = async () => {
    try {
      const response = await API.userSignup(signupData);
>>>>>>> Stashed changes

    try {
      let response = await API.userSignup(signup);
      console.log('API Response:', response); // Log the response
      if (response.isSuccess) {
        setError('Account created successfully.');
        setSignupData({
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
      setError('An error occurred during signup. Please try again later.');
    }
  };

  return (
    <Component>
      <Box>
        <Image src={Images} alt="login" />
      </Box>

      {account === 'login' ? (
        <Wrapper>
          <StyledTextField
            variant="standard"
            label="Username"
            name="username"
            value={loginData.username}
            onChange={onInputChange}
          />
         
          <StyledTextField
            variant="standard"
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={loginData.password}
            onChange={onInputChange}
          />
          
          
          <Button variant="contained" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
          {error && <Error>{error}</Error>}

          <LoginButton variant="contained" onClick={handleLogin}>
            Login
          </LoginButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <SignupButton onClick={toggleSignup}>Create an Account</SignupButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField
            variant="standard"
            onChange={onInputChange}
            name="name"
            label="Enter Name"
            value={signupData.name}
          />
          <TextField
            variant="standard"
            onChange={onInputChange}
            name="username"
            label="User Name"
            value={signupData.username}
          />
          <TextField
            variant="standard"
            onChange={onInputChange}
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={signupData.password}
          />
          <Button variant="contained" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
          {error && <Error>{error}</Error>}
          <SignupButton onClick={handleSignup}>Sign Up</SignupButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <LoginButton variant="contained" onClick={toggleSignup}>
            Already have an account
          
          </LoginButton>
        </Wrapper>
      )}
    </Component>
  );
};
