import React from 'react'
import './Rolelog.css'
import Footer from '../footer/Footer'
// import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar'

import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";

const Rlogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data)

  return (
	<div className='rbody'>
	<center>
    <div className="App__form">
      <h1><center>Login as</center></h1>
	  <form onSubmit={handleSubmit(onSubmit)}>
	  <center>
	  <div className='container-rlog'>
	  <a href="./adminlog" class="btnsr">
	  <svg width="277" height="62">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" stop-color="#FF8282"/>
				<stop offset="100%" stop-color="#E178ED" />
			</linearGradient>
		</defs>
		 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
	  </svg>
	 
		<p>Admin</p>
	</a>
	</div>
	</center>
	<center>
	  <div className='container-rlog'>
	  <a href="./leadlog" class="btnsr">
	  <svg width="277" height="62">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" stop-color="#FF8282"/>
				<stop offset="100%" stop-color="#E178ED" />
			</linearGradient>
		</defs>
		 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
	  </svg>
	 
		<p>Team Leader</p>
	</a>
	</div>
	</center>
	<center>
	  <div className='container-rlog'>
	  <a href="./memlog" class="btnsr">
	  <svg width="277" height="62">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" stop-color="#FF8282"/>
				<stop offset="100%" stop-color="#E178ED" />
			</linearGradient>
		</defs>
		 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
	  </svg>
	 
		<p>Team Member</p>
	</a>
	</div>
	</center>
      </form>
	  </div>
	  </center>
	  </div>
  )
}


export default Rlogin
