import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
// import Navbar from './navbar/Navbar';
import  './App.css'
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
function App() {
  
  return (
    <div>
    <BrowserRouter>
    
   <Routes>
   <Route  className='App' path="/" element={<Login/>}></Route>
    <Route  path="/home" element={<Home/>}></Route>
    <Route   path="/signup" element={<SignUp/>}></Route>
    
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;