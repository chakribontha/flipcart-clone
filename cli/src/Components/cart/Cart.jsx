import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography ,styled, Button} from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';


const Containerr=styled(Grid)(({theme})=>({
padding:'30px 135px',
[theme.breakpoints.down('md')]:{
  padding:'15px 0'
}
}))

const Header=styled(Box)`
padding:15px 24px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top:1px solid #f0f0f0;
`
const ButtonWrapper=styled(Box)`
  padding:16px 22px;
  background:#fff;
`
const StyledButton=styled(Button)`
 display: flex;
 margin-left:auto;
 background:#fb641b;
 color:#fff;
 width:250px;
 height:50px;
 border-radius:2px;
`
const LeftComponent=styled(Grid)(({theme})=>({
  paddingRight:'15',
  [theme.breakpoints.down('md')]:{
    marginBottom:15
  }
}))


  
function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Containerr container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          
            
            {cartItems.length === 0 ? (
              <Typography>Your cart is empty.</Typography>
            ) : (
              <Header>
                 Mycart({cartItems.length})
              </Header> 
            )}
            {
              cartItems.map(item=>(
                <CartItem item={item}/>
              ))
            }
          <ButtonWrapper>
            <StyledButton>Place Order</StyledButton>
          </ButtonWrapper>
         
        </LeftComponent>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={cartItems}/>
        </Grid>
      </Containerr>
    </>
  );
}

export default Cart;