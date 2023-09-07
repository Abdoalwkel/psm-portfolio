import React , {useState , useEffect} from 'react'
import {motion} from 'framer-motion'
import images from '../constants/images';
import { AppWrap, MotionWrap } from '../wrapper';
import { Container , Row , Col } from 'react-bootstrap'
import './About.scss';
const About = () => {
  return (

<div className="all-about" id='about'>

<div>
<h2  className="head-text">About<span>Me</span>
  </h2>

<div className="app__profiles" >


<Container>
  <Row>
    <Col>
    <motion.div
   whileInView={{opacity : 1}}
   whileHover={{scale: 1.1}}
   transition={{duration:0.5 , type:'tween'}}
   className="app__profile-item"
>
<div className="about-img">
<img src={images.aboutImg} alt="img" /> 
 <span className="crilec-spain">
  </span>

</div>





</motion.div>
    
    </Col>
  
    <Col>
    <motion.div
   whileInView={{opacity : 1}}
   whileHover={{scale: 1.1}}
   transition={{duration:0.5 , type:'tween'}}
   className="app__profile-item"
>

<div className='about-write'>
<p>  I am AbdulRahman Alwkel , I'am a front-end developer
   and  I'am currently a student at the Faculty of Law, Helwan University,
  and I live in Qena, Egypt, in the second year
    I started in the field of web development a year ago
    Until now
    I work as a freelancer
    You will find my projects at the bottom of the site
    </p>
</div>


</motion.div>
    
    </Col>
  </Row>
</Container>




</div>


</div>

</div>

  )
}

export default  AppWrap( About, 'about');
 