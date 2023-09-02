import React from 'react';
import Carousel from 'react-multi-carousel';
import { styled } from '@mui/material';
import { bannerData } from '../../constants/data';
import "react-multi-carousel/lib/styles.css";

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 180
    }
}));

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function Banner() {
  return (
    <Carousel 
      responsive={responsive}
      customTransition="all .5"
      autoPlay={true}    
      transitionDuration={750}
      autoPlaySpeed={750}
      draggable={false}
      swipeable={false}
      infinite={true}
      keyBoardControl={true}
      slidesToSlide={1}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map(data => (
        <Image key={data.id} src={data.url} alt="banner" />
      ))}
    </Carousel>
  );
}

export default Banner;
