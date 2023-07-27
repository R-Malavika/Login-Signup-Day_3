import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControlLabel, Checkbox, Link } from '@mui/material';

import './loginpg.css';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginsadmin = ({ errorMessages, loggedIn, login, loginError }) => {
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
    console.log(password);
    const isPasswordValid = passwordRegex.test(password);
    console.log(isPasswordValid);
    
    if (isPasswordValid) {
      try {
        const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
          email,
          password
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        // navigate('/tasks');
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
        <center>
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
            label="Remember me"
          /></center>
        </div>
        <div className="button-container">
          <input className="letin" type="submit" style={{ "outline": 'none' }} value="Login" />
        </div>
      </form>
    </div>
  );

  const renderSuccessMessage = (
    <div>
      <div>Hi! Admin <h5><b>{email}</b></h5></div>
      You have successfully logged in. Welcome..
    </div>
  );

  return (
    <div className="app1">
      <div className="login-form">
        <div className="title-log">
          <b>
            <center>Admin Login</center>
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
              <br /><center>
              <div className="dd" >
                Not a member? <Link href="./signup" style={{ textDecoration: "none","fontFamily":"serif"}}>Sign Up</Link>
              </div></center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Loginsadmin);

































// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { FormControlLabel, Checkbox,Link } from '@mui/material';
// // import { Link } from 'react-router-dom';
// import './loginpg.css';
// import { FaArrowRight } from 'react-icons/fa';
// import { IoMdHome } from 'react-icons/io';

// const Logins = ({ errorMessages, loggedIn, login, loginError }) => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [userName, setUserName] = useState('');

//   const errors = {
//     uname: 'Invalid username',
//     pass: 'Invalid password',
//   };

//   const [localErrorMessages, setLocalErrorMessages] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const uname = formData.get('uname');
//     const pass = formData.get('pass');

//     const unameRegex = /^[A-Za-z]+$/;
//     const isUnameValid = unameRegex.test(uname);

//     const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//     const isPassValid = passRegex.test(pass);

//     if (isUnameValid && isPassValid) {
//       setIsSubmitted(true);
//       setUserName(uname);
//       login();
//     } else {
//       let errorMessages = {};

//       if (!isUnameValid) {
//         errorMessages = { ...errorMessages, uname: errors.uname };
//       }

//       if (!isPassValid) {
//         errorMessages = { ...errorMessages, pass: errors.pass };
//       }

//       setLocalErrorMessages(errorMessages);
//       loginError(errorMessages);
//     }
//   };

//   const handleRememberMe = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const renderErrorMessage = (name) =>
//     localErrorMessages[name] && <div className="error">{localErrorMessages[name]}</div>;

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-containers">
//           <label>Username:</label>{' '}
//           <input
//             type="text"
//             style={{
//               borderBottom: '2px solid #9c6990',
//               borderTop: '2px solid white',
//               borderLeft: '2px solid white',
//               borderRight: '2px solid white',
//             }}
//             name="uname"
//             required
//           />
//           {renderErrorMessage('uname')}
//         </div>
//         <br />
//         <br />
//         <div className="input-containers">
//           <label>Password:</label>{' '}
//           <input
//             type="password"
//             style={{
//               borderBottom: '2px solid #9c6990',
//               borderTop: '2px solid white',
//               borderLeft: '2px solid white',
//               borderRight: '2px solid white',
//             }}
//             className="pass1"
//             name="pass"
//             required
//           />
//           {renderErrorMessage('pass')}
//         </div>
        
//         <div className="button-container">
//           <Link to="/">
//             <input className="letin" type="submit" style={{ outline: 'none' }} value="Login" />
//           </Link>
//         </div>
//       </form>
//     </div>
//   );

//   const renderSuccessMessage = (
//     <div>
//       User is successfully logged in. Welcome, <h5><b>{userName}!</b></h5>
//     </div>
//   );

//   return (
//     <div className="app1">
//       <div className="login-form">
//         <div className="title-log">
//           <b>
//             <center>Login</center>
//           </b>
//         </div>
//         {isSubmitted ? (
//           <>
//             {renderSuccessMessage}
//             <Link href="./tasks">Home</Link><br></br><br></br>
//           </>
//         ) : (
//           <>
//             {renderForm}
//             <br />
//             <div className="dd">
//               Not a member? <Link href="./signup">Sign Up</Link><br></br><br></br>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   loggedIn: state.loggedIn,
//   errorMessages: state.errorMessages,
// });

// const mapDispatchToProps = (dispatch) => ({
//   login: () => dispatch({ type: 'LOGIN' }),
//   loginError: (errorMessages) => dispatch({ type: 'LOGIN_ERROR', payload: errorMessages }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Logins);

























































// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { FormControlLabel, Checkbox, Link } from '@mui/material';
// import './loginpg.css';

// const Login = ({ errorMessages, loggedIn, login, loginError }) => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const errors = {
//     uname: 'Invalid username',
//     pass: 'Invalid password',
//   };

//   const [localErrorMessages, setLocalErrorMessages] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const uname = formData.get('uname');
//     const pass = formData.get('pass');

//     // Validate username using regex: only allow A-Z characters
//     const unameRegex = /^[A-Za-z]+$/;
//     const isUnameValid = unameRegex.test(uname);

//     // Validate password using regex: at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
//     const passRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//     const isPassValid = passRegex.test(pass);

//     if (isUnameValid && isPassValid) {
//       setIsSubmitted(true);
//       login();
//     } else {
//       let errorMessages = {};

//       if (!isUnameValid) {
//         errorMessages = { ...errorMessages, uname: errors.uname };
//       }

//       if (!isPassValid) {
//         errorMessages = { ...errorMessages, pass: errors.pass };
//       }

//       setLocalErrorMessages(errorMessages);
//       loginError(errorMessages);
//     }
//   };

//   const handleRememberMe = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const renderErrorMessage = (name) => (
//     name === localErrorMessages.name && <div className="error">{localErrorMessages.message}</div>
//   );

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username</label>
//           <input type="text" style={{ borderBottom: '2px solid #9c6990' }} name="uname" required />
//           {renderErrorMessage('uname')}
//         </div>
//         <div className="input-container">
//           <label>Password</label>
//           <input
//             type="password"
//             style={{ borderBottom: '2px solid #9c6990' }}
//             className="pass1"
//             name="pass"
//             required
//           />
//           {renderErrorMessage('pass')}
//         </div>
//         <div className="checkbox-container">
//           <FormControlLabel
//             control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
//             label="Remember me"
//           />
//           <Link href="Forgot Password">Forgot Password?</Link>
//         </div>
//         <div className="button-container">
//           <Link to="/">
//             <input className="letin" type="submit" value="Login" />
//           </Link>
//         </div>
//       </form>
//     </div>
//   );

//   const renderSuccessMessage = <div>User is successfully logged in</div>;

//   return (
//     <div className="app1">
//       <div className="login-form">
//         <div className="title-log">
//           <b>
//             <center>Login</center>
//           </b>
//         </div>
//         {isSubmitted ? (
//           <>
//             {renderSuccessMessage}
//             {<Link href="./">home</Link>}
//           </>
//         ) : (
//           <>
//             {renderForm}
//             <br />
//             <div className="dd">
//               Not a member? <Link href="./signup">Sign Up</Link><br></br><br></br>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   loggedIn: state.loggedIn,
//   errorMessages: state.errorMessages,
// });

// const mapDispatchToProps = (dispatch) => ({
//   login: () => dispatch({ type: 'LOGIN' }),
//   loginError: (errorMessages) => dispatch({ type: 'LOGIN_ERROR', payload: errorMessages }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);



































// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./loginpg.css";
// import FormInput from "../components/FormInput";

// const Login = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     birthday: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9_ ]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="app1">
   
//       <form onSubmit={handleSubmit}>
//       <br></br>
//         <h1 className="lh">Login</h1>
//         <br></br>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
//         <Link to='/'>
//         <button className="logb1">Login</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Login;