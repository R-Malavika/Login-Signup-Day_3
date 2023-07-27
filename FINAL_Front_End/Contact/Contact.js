import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'
import Footer from '../footer/Footer'
// import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
function Contact() {
  const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

  const handleSubmit =async (event) => {
      event.preventDefault();
  
      const formData = {
       
        email: email,
        feedback: message,
      };
      const token = localStorage.getItem('token');
      
     await axios.post('http://localhost:8181/api/v1/users/addUserFeedback', formData,{
      headers: {
        "Authorization": `Bearer ${token}`, 
      },
      
    })
        .then((response) => {
          
          console.log('Message sent successfully:', response.data);
        })
        .catch((error) => {
        
          console.error('Error sending message:', error);
        });
        setFullName('');
        setEmail('');
        setMessage('');
       
 
    };
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
          <form action="" onSubmit={handleSubmit} id="contact-form">
          <h2>Feedback</h2>
            <div class="input-box">
              <input  type="text"
                    required="true"
                    name="fullName" // Give the name attribute to identify the input field
                    placeholder='Name'
                    value={fullName} // Bind the value to the state variable
                    onChange={(e) => setFullName(e.target.value)}></input>
              
            </div>
            
            <div class="input-box">
              <input  type="email"
                    required="true"
                    name="email" // Give the name attribute to identify the input field
                    placeholder='E-mail'
                    value={email} // Bind the value to the state variable
                    onChange={(e) => setEmail(e.target.value)}></input>
             
            </div>
            
            <div class="input-box">
              <textarea   required={true}
                    placeholder='Message'
                    name="message" // Give the name attribute to identify the input field
                    value={message} // Bind the value to the state variable
                    onChange={(e) => setMessage(e.target.value)}></textarea>
              
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


