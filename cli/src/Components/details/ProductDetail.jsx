import React from 'react';
import { Typography, Box, styled ,Button, Table, TableBody, TableRow ,TableCell} from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;
const ColumnText=styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
&>td{
  margin-top: 10px;
  font-size: 14px;
  border:none;
}
`

function ProductDetail({ product }) {
  // const date=new Date(new Date().getTime()*5*24*60*60*1000);
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const fassured =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
        8 Ratings & 1 Review
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#878787' }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#388E3C' }}>
          {product.price.discount}
        </Box>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />Bank OfferFlat ₹500 off on HDFC Bank Credit Card EMI
          Trxns on orders priced between ₹10,000 to ₹14,999T&C{' '}
        </Typography>
        <Typography>
          <StyledBadge />Bank OfferFlat ₹1,500 off on HDFC Bank Credit Card EMI
          Trxns on orders priced between ₹15,000 to ₹39,999T&C{' '}
        </Typography>
        <Typography>
          <StyledBadge />Bank OfferFlat ₹2,000 off on HDFC Bank Credit Card EMI
          Trxns on orders priced between ₹40,000 to ₹49,999T&C{' '}
        </Typography>
        <Typography>
          <StyledBadge />Extra ₹500 Off on Bikes & Scooters on purchase of
          ₹30,000 or moreT&C{' '}
        </Typography>
        <Typography>
          <StyledBadge />Partner OfferSign-up for Flipkart Pay Later & get free
          Times Prime Benefits worth ₹10,000*Know More
        </Typography>
        <Typography>
          <StyledBadge />Partner OfferPurchase now & get 1 surprise cashback
          coupon in Future
        </Typography>
        
      </SmallText>
      <Table>
        <TableBody>
           <ColumnText>
                <TableCell style={{color:'#878787'}}>Delivery</TableCell> 
                <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>  
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Warranty</TableCell> 
                <TableCell>No Warranty</TableCell>  
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Seller</TableCell> 
                <TableCell>
                      <Box style={{color:'#2874f0'}} component="span"> SuperComNet</Box> 
                      <Typography>GST invoice Available</Typography>
                      <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell colSpan={2}>
                   <img src={adURL} style={{width:390}} alt="flipcartcoints"/>
                 </TableCell> 
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Description</TableCell> 
                <TableCell>{product.description}</TableCell>  
            </ColumnText>
            
           
        </TableBody>
      </Table>
    </>
  );
}

export default ProductDetail;
