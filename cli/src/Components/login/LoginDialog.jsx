import React, { useState, useContext } from 'react';
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { authenticatSignup, authenticatLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Components = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
  height: 83%;
  width: 28%;
  padding: 45px 30px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  margin-top: 10px;
  font-weight: 600;
  line-height: 0;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: black;
  height: 48px;
  border-radius: 3px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountIntialValue = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get Access To Your Orders, Wishlist and Recommendations',
  },
  signUp: {
    view: 'signup',
    heading: "Looks like you're new here",
    subHeading: 'Sign up with your mobile number to get started',
  },
};

const signUpIntialValue = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
};

const loginIntialValue = {
  username: '',
  password: '',
};

export default function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(accountIntialValue.login);
  const [signupData, setSignupData] = useState(signUpIntialValue);
  const [login, setLogin] = useState(loginIntialValue);
  const [error, setError] = useState(false);

  // Data provider for account
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntialValue.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountIntialValue.signUp);
  };

  const onChangeInput = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    try {
      let response = await authenticatSignup(signupData);
      if (response && response.status === 200) {
        handleClose();
        setAccount(signupData.firstname);
      }
    } catch (error) {
      console.log('Signup error:', error);
    }
  };

  const loginUser = async () => {
    try {
    
      console.log('Logging in user');
      let response = await authenticatLogin(login);
      console.log('Login response:', response);

      if (response && response.status === 200) {
        handleClose();
        setAccount(response.data.data.firstname);
       
      } else {
        setError(true);
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Components>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Username" onChange={onValueChange} name="username" />

              {error && <Error>Please enter valid username</Error>}

              <TextField variant="standard" label="Enter Password" onChange={onValueChange} name="password" />
              <Text>By continuing, you agree to Flipkart's Terms of Use and Policy</Text>
              <LoginButton onClick={loginUser}>LOGIN</LoginButton>
              <Typography style={{ textAlign: 'center' }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>New to FlipCart? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter First Name" onChange={onChangeInput} name="firstname" />
              <TextField variant="standard" label="Enter Last Name" onChange={onChangeInput} name="lastname" />
              <TextField variant="standard" label="Enter Username" onChange={onChangeInput} name="username" />
              <TextField variant="standard" label="Enter Email" onChange={onChangeInput} name="email" />
              <TextField variant="standard" label="Enter Password" onChange={onChangeInput} name="password" />
              <TextField variant="standard" label="Enter Phone" onChange={onChangeInput} name="phone" />
              <LoginButton onClick={signUpUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Components>
    </Dialog>
  );
}
