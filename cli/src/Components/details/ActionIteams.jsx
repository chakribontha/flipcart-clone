
import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { payUsingPaytm } from '../../service/api';
import {post} from '../../utils/paytm'
const LeftContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  },
}));

const Image = styled('img')`
  max-width: 100%;
  display: block;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
`;

function ActionItems({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addIteamToCart = () => {
    dispatch(addToCart(id, quantity)); 
    navigate('/cart'); 
  };

  const buyNow=async()=>{
   let respone= await payUsingPaytm({amount:500,email:'chakribontha9@gmail.com'})
   let information={
     action:'https://securegw-stage.paytm.in/order/process',
     params:respone
   }
   post(information)
  }

  return (
    <LeftContainer>
      <Box
        style={{
          padding: '15px 0',
          border: '1px solid #f0f0f0',
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>

      <StyledButton variant="contained" style={{ background: '#ff9f00' }} onClick={addIteamToCart}>
        <Cart /> Add to Cart
      </StyledButton>

      <StyledButton variant="contained" style={{ background: '#fb541b' }} onClick={buyNow} >
        <Flash /> Buy now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItems;
