import React from 'react'
import ActionIteams from './ActionIteams';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getProductDetails} from '../../redux/actions/productsAction'
import {Box,styled,Grid} from '@mui/material';
import ProductDetail from './ProductDetail';
const Component = styled(Box)`
  background:#F2F2F2;
  margin-top:55px;
`
const Conatiner=styled(Grid)(({theme})=>({
  background:'#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down['md']]:{
     margin:0
  }
}))
 
const RightComponent=styled(Grid)`
  margin-top:55px;
`
function DetailsView() {
    const dispatch=useDispatch();
    const {id} =useParams();

    const { loading, product } = useSelector(state => state.getProductsDetails);

    useEffect(()=>{
      if(product && id !== product.id) 
        dispatch(getProductDetails(id));
    },[dispatch,id,loading,product])
   
    console.log(product)
  return (
   <Component>
        { product && Object.keys(product).length &&
           <Conatiner container>
             <Grid item lg={4} md={4} sm={8} xs={12}>
               <ActionIteams product={product}/>
             </Grid>
             <RightComponent lg={8} md={8} sm={8} xs={12}>
               
                <ProductDetail product={product}/>
              
             </RightComponent>
           </Conatiner>
        }
   </Component>
  )
}

export default DetailsView