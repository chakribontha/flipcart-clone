import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import {Box,styled} from '@mui/material'

import { useEffect } from 'react'
import {getProducts} from '../../redux/actions/productsAction';
import {useDispatch,useSelector} from 'react-redux';
import  Slide  from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
const Container=styled(Box)`
padding:10px;
background:#F2F2F2;
`

function Home() {
  const {products}= useSelector(state =>state.getProducts) 
  console.log(products)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
      <>
       <Navbar/>
         <Container>
           <Banner/> 
           <MidSlide products={products} title="Deal of the day" timer={true}/>
           <MidSection/>
           <Slide products={products} title="Discount for you" timer={false}/>
           <Slide products={products} title="suggesting Iteams" timer={false}/>
           <Slide products={products} title="Top Selection" timer={false}/>
           <Slide products={products} title="Recommended Items" timer={false}/>
           <Slide products={products} title="Session top picks" timer={false}/>
         </Container>
      
      </>
   
  )
}

export default Home