import React from 'react'
import {color, motion} from 'framer-motion'
import images from '../constants/images'
import AppWrap from '../wrapper/AppWrap'
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
             <div class="item button-parrot">
    <a href="" className="Cv" style={{textDecoration :"none" , color : "white"}}>
      Download My Cv
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
    </a>
  </div>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >

        <div className="app__header-badge">
            <div className="badge-cmp app__flex">
                
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                <p className="p-text" style={{color: 'white'}}>Hello, I am</p>
                <h1 className="head-text" style={{color: 'white'}}>AbdoAlwkel</h1>
          </div>  


{/* <div className="spin">
<span className="spineer"></span>

</div> */}

            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text" style={{color: 'white'}}>Web Developer</p>
              <p className="p-text" style={{color: 'white'}}>Freelancer</p>
            </div>
        </div>

 

      </motion.div>


      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >

<img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />


    </motion.div>














    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.html, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
