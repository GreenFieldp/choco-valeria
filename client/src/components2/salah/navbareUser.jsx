import React, { useState } from "react";
import './style.css'
import { FaHome, FaSignOutAlt,FaSearch } from 'react-icons/fa';
import axios from "axios";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  const [name, setName] = useState();

 

  return (
    <div className="navbar">
      <div className="navbar-item">
      <Link to="/listUser"> <a href="#" className="account-icon"><FaHome /> Home</a></Link> 
      </div>
      <div className="navbar-item">
        <div className="container">
        <Link to={`/ChocoDetails/${name}`}>
         <input
            checked=""
            className="checkbox"
            type="checkbox"
          /></Link>
          <div className="mainbox">
         <FaSearch style={{color:'white'}}/>
            <input
              className="search_input"
              placeholder="search"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="iconContainer">
            
              {/* Your SVG icon */}
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-item">
        <Link to="/Pannier"><a className="account-icon">
          <FaSignOutAlt /> Pannier
        </a></Link>
      </div>
    </div>
  );
};

export default NavbarUser;
