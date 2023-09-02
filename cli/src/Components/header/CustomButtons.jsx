import { Box, Button, Typography, styled ,Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 3% auto 0',
  alignItems: 'center',
  '& > *': {
    marginRight: '40px !important',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]:{
    display: 'block',
  }
}));

const Container = styled(Link)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  textDecoration: 'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display: 'block',
  }
}))
 


const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: uppercase;
  padding: 5px 20px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
`;

export default function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account ,setAccount } = useContext(DataContext);

  const {cartItems}=useSelector(state=>state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}/>
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 7, width: 135 }}>Become Seller</Typography>
      <Typography style={{ marginTop: 7 }}>More</Typography>

      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="primary"></Badge>
        <ShoppingCartIcon />
        <Typography style={{marginLeft:10}}>Cart</Typography>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
