import React from 'react';
import { Link } from 'react-router-dom';


const TopMenu = ({ onOpen }) => (
    <div className="w3-top" style={{width: "57%"}}>
      <div className="w3-white w3-xlarge" style={{ maxWidth: '2200px', margin: 'auto' }}>
        <div className="w3-button w3-padding-16 w3-left" onClick={onOpen}>☰</div>
        <div className="w3-right w3-padding-16"></div>
        <Link to ='/listAdmin'>
        <div className="w3-center w3-padding-16">Liste chocolat</div></Link>
      </div>
    </div>
  );


export default  TopMenu