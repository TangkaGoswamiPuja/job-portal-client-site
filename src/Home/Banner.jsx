import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    
      return (
        <>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper rounded-xl"
          >
            <SwiperSlide>
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/SNp43Cr/pexels-brett-sayles-1426044.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Find Your Favourite<br></br>
<span className='text-6xl text-purple-400 '>Job Immediete</span></h1>
      <p className="mb-5 text-white">
"Discover Your Dream Job Instantly! Let us connect you with opportunities tailored to your skills and passions. Say goodbye to job hunting stress and hello to fulfilling career paths."</p>
      <Link to={"/alljobs"}><button className="btn  bg-purple-500  text-white">Show All</button></Link>
    </div>
  </div>
</div>
</SwiperSlide>
            <SwiperSlide> <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/W5XrdLb/pexels-ardamez-12733.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Find Your Favourite<br></br>
<span className='text-6xl text-purple-400 '>Job Immediete</span></h1>
      <p className="mb-5 text-white">
"Discover Your Dream Job Instantly! Let us connect you with opportunities tailored to your skills and passions. Say goodbye to job hunting stress and hello to fulfilling career paths."</p>
      <Link to={"/alljobs"}><button className="btn  bg-purple-500  text-white">Show All</button></Link>
    </div>
  </div>
</div></SwiperSlide>
            <SwiperSlide> <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/h8B8W3J/pexels-1222300-2324837.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Find Your Favourite<br></br>
<span className='text-6xl text-purple-400 '>Job Immediete</span></h1>
      <p className="mb-5 text-white">
"Discover Your Dream Job Instantly! Let us connect you with opportunities tailored to your skills and passions. Say goodbye to job hunting stress and hello to fulfilling career paths."</p>
      <Link to={"/alljobs"}><button className="btn  bg-purple-500  text-white">Show All</button></Link>
    </div>
  </div>
</div></SwiperSlide>
            <SwiperSlide> <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/YcX7BW8/pexels-fauxels-3183127.jpg)'}}>
  <div className="hero-overlay bg-opacity-50 ">

  </div>
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Find Your Favourite<br></br>
<span className='text-6xl text-purple-400 '>Job Immediete</span></h1>
      <p className="mb-5 text-white">
"Discover Your Dream Job Instantly! Let us connect you with opportunities tailored to your skills and passions. Say goodbye to job hunting stress and hello to fulfilling career paths."</p>
      <Link to={"/alljobs"}><button className="btn  bg-purple-500  text-white">Show All</button></Link>
    </div>
  </div>
</div></SwiperSlide>
          </Swiper>
        </>
      );
};

export default Banner;