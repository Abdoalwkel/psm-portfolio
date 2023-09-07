import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF , FaWhatsapp } from 'react-icons/fa';
import {BiLogoGithub} from 'react-icons/bi' 
const SocialMedia = () => (
  <div className="app__social">
  
        <div>
        <a href="https://github.com/Abdoalwkel"><BiLogoGithub /></a>
        </div>


        <div>
        <a href="https://www.facebook.com/abdoalrhman.alwkel.1/"><FaFacebookF /></a>
        </div>



        <div>
<a href="https://www.instagram.com/3lwkel/">        <BsInstagram />
</a>
        </div>


  </div>
);

export default SocialMedia;
