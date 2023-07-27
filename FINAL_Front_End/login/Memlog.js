import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControlLabel, Checkbox, Link } from '@mui/material';
import './loginpg.css';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginsmem = ({ errorMessages, loggedIn, login, loginError }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [localErrorMessages, setLocalErrorMessages] = useState({}); 
  const navigate = useNavigate();
  const errors = {
    email: 'Invalid username',
    password: 'Invalid password',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
  console.log(isPasswordValid);
  if (isPasswordValid) {
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        email,
        password,
      });

        const token = response.data.token;
        localStorage.setItem('token', token);
        //navigate('/tasks');
        setIsSubmitted(true);
        setEmail(email);
       
      } catch (error) {
        console.error('Error: ', error);
        const errorMessages = {
          password: 'Invalid email or password',
        };
        setLocalErrorMessages(errorMessages);
        loginError(errorMessages);
      }
    } else {
      const errorMessages = {
        password: errors.password,
      };
      window.alert("Incorrect password/email");
      setLocalErrorMessages(errorMessages);
      loginError(errorMessages);
    }
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  const renderErrorMessage = (name) => (
    name === localErrorMessages.name && <div className="error">{localErrorMessages.message}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input type="text" style={{ borderBottom: '2px solid #9c6990', borderTop: '2px solid white', borderLeft: '2px solid white', borderRight: '2px solid white' }} name="email" required />
          {renderErrorMessage('email')}
        </div>
        <br /><br />
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            style={{ borderBottom: '2px solid #9c6990', borderTop: '2px solid white', borderLeft: '2px solid white', borderRight: '2px solid white' }}
            className="pass1"
            name="password"
            required
          />
          {renderErrorMessage('password')}
        </div>
        <div className="checkbox-container">
        <center><FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
            label="Remember me"
          /><br></br>
          </center>
        </div>
        <div className="button-container">
          <input className="letin" type="submit" style={{ "outline": 'none' }} value="Login" />
        </div>
      </form>
    </div>
  );

  const renderSuccessMessage = (
    <div>
      <div>Hi! Team Member <h5><b>{email}</b></h5></div>
      You have successfully logged in. Welcome..
    </div>
  );

  return (
    <div className="app1">
      <div className="login-form">
        <div className="title-log">
          <b>
            <center>Team Member Login</center>
          </b>
        </div>
        {isSubmitted ? (
          <>
            {renderSuccessMessage}
            <h5><Link href="/tasks" style={{ textDecoration: "none","fontFamily":"serif"}}><FaIcons.FaHome/> Home</Link></h5>
            <div className='img-log'><img
            src="https://freesvgillustration.com/wp-content/uploads/2022/06/Employees-co-working.png"
            alt="new"
            /></div>
          </>
        ) : (
            <>
              {renderForm}
              <br></br>
              <div className="dd">
              <center>  Not a member? <Link href="./signup" style={{ textDecoration: "none","fontFamily":"serif"}}>Sign Up</Link></center>
              </div><br></br><br></br>
            </>
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  errorMessages: state.errorMessages,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: 'LOGIN' }),
  loginError: (errorMessages) => dispatch({ type: 'LOGIN_ERROR', payload: errorMessages }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginsmem);
