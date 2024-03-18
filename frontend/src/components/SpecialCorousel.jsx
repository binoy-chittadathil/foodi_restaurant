import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import axios from 'axios'
import Item from './Item';

function SpecialCorousel() {
    const sliderRef = useRef(null);
    const [popularDishes,setPopularDishes]=useState([]);

    useEffect(()=>{
      axios.get('/menus').then(({data})=>{
        const filtered=data.filter(item=>item.category==='popular')
        setPopularDishes(filtered);
      }).catch(err=>{
        console.error('some error occured to find data',err);
      })
    },[]);

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite:true
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:true
          }
        }
      ],
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {popularDishes.map((item,i)=>(
          <div key={i}>
            <Item item={item}/>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SpecialCorousel