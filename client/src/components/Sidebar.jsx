import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({ onClose }) => (
  <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{ display: 'none', zIndex: 2, width: '40%', minWidth: '300px' }} id="mySidebar">
    <a href="javascript:void(0)" onClick={onClose} className="w3-bar-item w3-button">Close Menu</a>
    <Link to='/listAdmin'>
    <a href="#food" onClick={onClose} className="w3-bar-item w3-button">List chocolat</a></Link>
   <Link to='/add'> <a href="#about" onClick={onClose} className="w3-bar-item w3-button">Add chocolat</a></Link>
  </nav>
);

export default  Sidebar