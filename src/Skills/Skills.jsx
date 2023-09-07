import React , {useEffect , useState} from 'react'
import {motion} from 'framer-motion'
import {AppWrap} from '../wrapper'
import ReactTooltip from 'react-tooltip'
import images from '../constants/images';
import { Container , Row , Col } from 'react-bootstrap'
import './Skills.scss';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1.3,
//       ease: 'easeInOut',
//     },
//   },
// };

const Skills = () => {


  return (
    <div id='skills' className='app__titel'>

<div className="head-name">
<h2 className="head-text app-titel">Skills <span>& Experiences</span></h2>

</div>

<div className="app__skills-container app__flex">

<div className="skill">

<motion.div
                whileInView={{ opacity: [0 , 1] }}
                transition={{ duration: 1.2 }}
                className="app__skills-item"
  >


<Container>
<Row className="Rrows">

<Col lg={1} md={4} sm={6}>

<div className="app__icon app__flex">
<img src={images.html} alt="" />
<p className="p-text">Html</p>
</div>
</Col>

<Col lg={1} md={4} sm={6}>
<div className="app__icon  app__flex">
<img src={images.css} alt="" />
<p className="p-text">Css</p>
</div>
</Col>

<Col lg={1} md={4} sm={6}>
<div className=" app__icon  app__flex">
<img src={images.javascript} alt="" />
<p className="p-text">Javascript</p>
</div>

</Col>

<Col lg={1} md={4} sm={6}>
<div className="app__icon  app__flex">
<img src={images.react} alt="" />
<p className="p-text">React</p>
</div>


</Col>

<Col lg={1} md={4} sm={6}>
<div className="app__icon  app__flex">
<img src={images.sass} alt="" />
<p className="p-text">Sass</p>
</div>
</Col>

<Col lg={1} md={4} sm={6}>
<div className="app__icon  app__flex">
<img src={images.git} alt="" />
<p className="p-text">git</p>
</div>

</Col>

<Col lg={1} md={4} sm={6}>
<div className="app__icon  app__flex">
<img src={images.node} alt="" />
<p className="p-text">Node js</p>
</div>
</Col>

</Row>
</Container>















</motion.div>


</div>

</div>

    </div>
  )
}

export default  AppWrap( Skills , 'skills');

