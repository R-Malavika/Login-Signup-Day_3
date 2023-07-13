import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
// import Navbar from './navbar/Navbar';
import  './App.css'
// import Dashboard from './Dashboard/Dashboard'
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import { Calender } from './Calendar/Calender';
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
function App() {
  
  return (
    <div>
    <BrowserRouter>
    
   <Routes>
   <Route  path="/" element={<Home/>}></Route>
   <Route  className='App' path="/login" element={<Login/>}></Route>
    <Route   path="/signup" element={<SignUp/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/pro" element={<empData/>}></Route>
    <Route path="/cal" element={<Calender/>}></Route>
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;