import React , { useRef} from 'react'
import { AppWrap} from '../wrapper';
import './Footer.scss';

import emailjs from '@emailjs/browser';

const Footer = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_irod7up', 'template_ztdajgz', form.current, 'OjwJJMNjNLSMVqISS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div className='form-section'>
    <h2 className="head-text"> Chat With <span>Me</span></h2>

    <div className="app__footer-cards">
<form ref={form} onSubmit={sendEmail}>

<input type="text" placeholder='Your Name' name="name" />
<input type="email" name="email"  placeholder='Your Email'  />
<input type="text"  name="phone"  placeholder='Your Phone Number' />
<textarea name="message" placeholder='Your message' ></textarea>
<button type='submit' className='sub'>send message</button>
</form>

      
    </div>
  </div>
  )
}

export default AppWrap(Footer , 'contact')






































// service_irod7up