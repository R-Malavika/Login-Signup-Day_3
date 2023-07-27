import "./Pro.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const Project = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    const todo = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(todo.data);
  };

  const setCards = () => {
    const cards = users.map((user, index) => (
      
      <div key={index} className="card col-4 my-3 mx-5 bg-white text-dark  ">
        <div className="card-body">
          <h5 className="card-title bg-success px-2 py-2">{user.name}</h5>
          <h6 className="card-subtitle mb-3 text-primary my-3">
            Username: {user.username}
          </h6>
          <p className="card-text">Email : {user.email}</p>
          <p className="card-text">Phone : {user.phone}</p>
          <p className="card-text">
            <h6>
              Location : {user.address.geo.lat},{user.address.geo.lng}
            </h6>
          </p>
          
        </div>
      </div>
      
    ));
    return cards;
  };

  return (
    <div>
      <Navbar/>
    <div>
    <div className='proback'>
      <nav className="navbar navbar-dark bg-light justify-content-center">
        <h2 className="text-primary">Employee Details</h2>
      </nav>
      <div className="container">
        <div className="row" style={{"margin-left":"140px"}}>{setCards()}</div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Project;
