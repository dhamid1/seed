
import { useState } from 'react';
import React from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

import Images from './Images/Logo.png';
import { API } from '../../src/Pages/service/api.js';

const Component = styled(Box)`
width: 500px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.7);
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
& > div , & > p {
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
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const signupInitialValues ={
  name: '',
  username: '',
  password: '',
};


export const LoginPage = () => {

  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(JSON.stringify(signupInitialValues));
  const {error, setError} = useState('');
  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }
  
    const onInputChange =(e) =>{
      setSignup({ ...signup, [e.target.name]: e.target.value});
    }
    
    console.log('Error: help me' );
    const signupUser = async () => {
      let response = await API.userSignup(signup);
     
      if (response.isSuccess){
         setError('hello');
        setSignup(JSON.stringify(signupInitialValues));
         toggleAccount('login');
       
      } else{
        setError('Something went wrong! Please try again later.');
      }
 
  }
  
  
  
  
  // const onInputChange =(e) =>{
  //   setSignup({ ...signup, [e.target.name]: e.target.value});
  // }
  // console.log('Error: help me' );
  // const signupUser = async () => {
  //   let response = await API.userSignup(signup);
  //   if (response.isSuccess){
  //     setError('');
  //     setSignup(JSON.stringify(signupInitialValues));
  //      toggleAccount('login');
     
  //   } else{
  //     setError('Something went wrong! Please try again later.');
  //   }
    
  // const signupUser = async () => {
  //   try {
  //     let response = await API.userSignup(signup);
  //     if (response.isSuccess) {
  //       setError('');
  //       setSignup(JSON.stringify(signupInitialValues));
  //       toggleAccount('login');
  //     } else {
  //       setError('Something went wrong! Please try again later.');
  //     }
  //   } catch (error) {
  //     // Handle the error here, e.g., display an error message or log it
  //     console.error('Error during signup:', error);
  //   }
  // }

  return (

    <Component>
      <Box>
        <Image src={Images} alt="login" />
      </Box>

      {
        account === 'login' ?
          <Wrapper>
            <TextField variant="standard" label="UserName" />
            <TextField variant="standard" label="Password" />
            { error && <Error>{error}</Error>}


            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ textAlign: 'center' }}>OR</Typography>
            <SignupButton onClick = {() => toggleSignup()}>Create an Account</SignupButton>
          </Wrapper>
          :

          <Wrapper>
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name = 'name' label="Enter Name" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name = 'username'label="User Name" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name = 'password'label="Password" />

            { error && <Error>{error}</Error>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Typography style={{ textAlign: 'center' }}>OR</Typography>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
          </Wrapper>
      }

    </Component>
  )
}