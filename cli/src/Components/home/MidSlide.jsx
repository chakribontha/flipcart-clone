import { Box ,styled} from '@mui/system'
import React from 'react'
import Slide from './Slide'

const Compound=styled(Box)`
display:flex;
`
const LeftComponent=styled(Box)(({theme})=>({
 width:'83%',
 [theme.breakpoints.down('md')]:{
     width:'100%'
 }
}));

const RightComponent=styled(Box)(({theme})=>({

 background:'#fff',
 padding:5,
 marginTop:10,
 marginLeft:10,
 marginBottom:10,
 width:'17%',
 textAlign:'center',
[theme.breakpoints.down('md')]:{
    display:'none',
}
}))

const MidSlide = ({products ,title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
   <Compound>
       <LeftComponent>
          <Slide
           products={products}
            title={title}
             timer={timer}
          />
       </LeftComponent>
       <RightComponent>
         <img src={adURL} alt="ad" style={{width:200}}/>
       </RightComponent>
   </Compound>
  )
}

export default MidSlide
