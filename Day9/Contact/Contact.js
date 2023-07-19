import React from 'react'
import './Contact.css'
import Footer from '../footer/Footer'
// import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
function Contact() {
  return (
    <div >
    <Navbar />
    
    <div className='contact-us'>
   
  <body className='conbody'>
  <section className='section-con'>
    
    <div class="section-header">
      <div class="container">
        <h2>Contact Us</h2>
        <p></p>
      </div>
    </div>
    
    <div class="container">
      <div class="row-con">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-home"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>Brookebond Road, near Brookefields mall,<br/> Coimbatore, Tamilnadu, <br/>641038</p>
            </div>
          </div>
          
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-phone"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>+91 9952725197</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>malavikaravindran30@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name="" placeholder='Full Name'></input>
              
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name="" placeholder='Email-id'></input>
             
            </div>
            
            <div class="input-box">
              <textarea required="true" name="" placeholder='Message'></textarea>
              
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""></input>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  </body>
    </div>
    <Footer/>
    </div>
    
)
}

export default Contact