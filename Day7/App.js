import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
import Login from './login/Login'
import Home from './Tasks/Home';
import SignUp from './signup/SignUp'
// import Navbar from './navbar/Navbar';
import  './App.css'
// import Dashboard from './Dashboard/Dashboard'
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import { Calender } from './Calendar/Calender';
import Dashboard from './homepage/Dashboard';
import Tasks from'./homepage/Tasks';
import Chat from './Chat/Chat';
// import DiscussionForum from './Collaborate/DiscussionForum';
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
    <Route path="/pro" element={<Project/>}></Route>
    <Route path="/cal" element={<Calender/>}></Route>
    <Route path="/dash" element={<Dashboard/>}></Route>
    <Route path="/create" element={<Tasks/>}></Route>
    <Route path="/collab" element={<Chat/>}></Route>
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;