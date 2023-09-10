import React, { useRef, useState } from 'react';
import { Container , Row , Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Work.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { AppWrap, MotionWrap } from '../wrapper';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Work.scss';
import images from '../constants/images';
import { BiLogoGithub } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    },
  },
};

const Work = () => {


  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


  return (
    <div id='work'>

<div className="head-titel">

<h2  className="app-titel">
  Welcome In My 
 <span>Amazing  Portfolio</span>
  </h2>

</div>


<motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
   animate={{ y : 80 }}
   transition={{ duration: 0.8, delay: 0.3 }}
   className="app__work-portfolio"
>






<div className="slider">


<Container className='cont'>
      <Row>
        <Col className='coll'>

        <div className="SlideComponent">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>
          <img src={images.pro_1} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Apple Phone Stor</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="https://github.com/Abdoalwkel/Phone-Store">
<BiLogoGithub />
</a>
<a href="https://phone-store-virid.vercel.app/">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>

        <SwiperSlide className='slide'>
          <img src={images.profoilo} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Portfolio</h4>
  <p>It's an amazing portfolio 
You can put all your works and articles
and responsev with all screens</p>

<div className="icons">
<a href="https://github.com/Abdoalwkel/portfolio-template">
<BiLogoGithub />
</a>
<a href="https://portfolio-template-two-delta.vercel.app/">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>


        <SwiperSlide className='slide'>
          <img src={images.timeZpne} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>TimeZone Store</h4>
<p>It is a watch store site that is responsive to all screens</p>

<div className="icons">
<a href="https://github.com/Abdoalwkel/e-commerce-time-zone">
<BiLogoGithub />
</a>
<a href="https://e-commerce-time-zone.vercel.app/">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>

{/* -------------------------------------------------- */}
        <SwiperSlide className='slide'>
          <img src={images.Nots} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Nots web</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="https://github.com/Abdoalwkel/book-name">
<BiLogoGithub />
</a>
<a href="https://book-name.vercel.app/">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>


        <SwiperSlide className='slide'>
          <img src={images.pro_1} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Apple Phone Stor</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="">
<BiLogoGithub />
</a>
<a href="">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>


        <SwiperSlide className='slide'>
          <img src={images.pro_1} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Apple Phone Stor</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="">
<BiLogoGithub />
</a>
<a href="">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>


        <SwiperSlide className='slide'>
          <img src={images.pro_1} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Apple Phone Stor</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="">
<BiLogoGithub />
</a>
<a href="">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>


        <SwiperSlide className='slide'>
          <img src={images.pro_1} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Apple Phone Stor</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="">
<BiLogoGithub />
</a>
<a href="">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>


        <SwiperSlide className='slide'>
          <img src={images.pro_1} alt="" />

<div className="pro-titel">
<div className="titel">

<h4>Apple Phone Stor</h4>
  <p>It's an amazing Apple Store widget that displays the types of phones you want when you click on it
Click on the icon to view the site</p>

<div className="icons">
<a href="">
<BiLogoGithub />
</a>
<a href="">
  <FaArrowUpRightFromSquare />
</a>
</div>

</div>

</div>

        </SwiperSlide>

      </Swiper>

            </div>

        </Col>
      </Row>
    </Container>












      </div>




</motion.div>



    </div>
  );
}

export default  AppWrap(Work, 'work');
