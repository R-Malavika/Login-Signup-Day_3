import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './signuppg.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedRole, setSelectedRole] = useState('USER');
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password,
        role: selectedRole
  
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setPassword('');
        navigate('/');
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    // if (isSubmit) {
    //   navigate('/');
    // }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
      <div className='sup'><center>
        <form className='form-sgup' onSubmit={handleSubmit}>
          <br></br>
          <h1>Sign Up</h1>
          <div className='gogo'>
            <div className='gogo'>
              <br></br>
              <label htmlFor='nm'>Username</label>
              <input
                type='name'
                className='in'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName} required
              />
            </div>
            <p className='span'>{errors.name}</p>
          </div>
<div className="gogo">
          <div className='gogo'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='in'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          </div>
          {errors.email && <span className='span'>{errors.email}</span>}

          <div className='loginbox'>
            <div className="gogo">
            <div className='gogo'>
              <label htmlFor='pwd'>Password</label>
              <input
                type='password'
                className='in'
                placeholder='password'
                id='pwd'
                value={password}
                onChange={handlePassword}
                required
              />
            </div>
            
            
            {errors.password && <span >{errors.password}</span>}
          </div>
          </div>
          <div className='loginbox'>
              <div className="chec23">
                <div className='gogo'>
                  <label htmlFor='role'>Role</label>
                  <select name='role' id='role' value={selectedRole} onChange={handleRoleChange}>
                    <option value='USER'>USER</option>
                    <option value='TEAM_LEADER'>TEAM LEADER</option>
                    <option value='TEAM_MEMBER'>TEAM MEMBER</option>
                  </select>
                </div>
              </div>
            </div>
          <button
            type='submit'
            className='logsign'
          >
            Sign Up
          </button>
        </form>
        </center>
      </div>
    </>
  );
};

export default SignUp;


































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import './signuppg.css';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();

//   const handleName = (event) => {
//     event.preventDefault();
//     setName(event.target.value);
//   };

//   const handleEmail = (event) => {
//     event.preventDefault();
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors(validateForm({ name, email, password }));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
//         name:name,
//         email:email,
//         password:password
  
//       });
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setEmail('');
//         setPassword('');
  
        
  
//       }
      
//     }
//     catch(error){
//       alert(error);
//       setIsSubmit(false);
  
//     }
//     if (isSubmit) {
//       navigate('/home');
//     }
//   };

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Username is required';
//       setIsSubmit(false);
//     }

//     if (values.email.trim() === '') {
//       errors.email = 'Email is required';
//       setIsSubmit(false);
//     }

//     if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }

//     setIsSubmit(Object.keys(errors).length === 0);

//     return errors;
//   };

//   return (
//     <>
//       <div className='sup'><center>
//         <form className='form-sgup' onSubmit={handleSubmit}>
//           <br></br>
//           <h1>Sign Up</h1>
//           <div className='gogo'>
//             <div className='gogo'>
//               <br></br>
//               <label htmlFor='nm'>Username</label>
              
//               <input
//                 type='name'
//                 className='in'
//                 placeholder='username'
//                 value={name}
//                 id='nm'
//                 onChange={handleName}
//               />
//             </div>
//             {errors.name}
//           </div>
// <div className="gogo">
//           <div className='gogo'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='email'
//               className='in'
//               placeholder='email'
//               id='email'
//               value={email}
//               onChange={handleEmail}
//             />
//           </div>
//           </div>
//           {errors.email && <p>{errors.email}</p>}

//           <div className='loginbox'>
//             <div className="gogo">
//             <div className='gogo'>
//               <label htmlFor='pwd'>Password</label>
//               <input
//                 type='password'
//                 className='in'
//                 placeholder='password'
//                 id='pwd'
//                 value={password}
//                 onChange={handlePassword}
//               />
//             </div>
            
            
//             {errors.password && <p>{errors.password}</p>}
//           </div>
//           </div>

//           <button
//             type='submit'
//             className='logsign'>
//             Sign In
//           </button>
//         </form>
//         </center>
//       </div>
//     </>
//   );
// };

// export default SignUp;




































// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./signuppg.css";
// import FormInput from "../components/FormInput";

// const SignUp = () => {
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
//     {
//       id: 4,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//     {
//       id: 5,
//       name: "Country",
//       type: "text",
//       placeholder: "Country",
//       errorMessage:
//         "Enter country name!",
//       label: "Country",
//       pattern: "^[A-Za-z]$",
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
//     <div className="app">
//       <form className='form-sgup'onSubmit={handleSubmit}>
//       <br></br>
//         <h1 className="sh">Sign Up</h1>
//         <br></br>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <Link to="/login">
//         <button className="logsign">Submit</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default SignUp;