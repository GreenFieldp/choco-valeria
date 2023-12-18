import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import { useLocation, useNavigate } from 'react-router-dom';
import NavbareUser from '../salah/navbareUser.jsx';


const ChocoDetails = () => {
  const [detail, setDetail] = useState({});
  const location = useLocation();
  const n = location.pathname.split('/')[2];
  const navigate=useNavigate()


  

  const handleGetByName = (n) => {
    axios.get(`http://localhost:3000/api/choco/${n}`)
      .then((res) => {
        console.log(res.data);
        setDetail(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (n) {
      handleGetByName(n);
    }
  }, []);

  const add = async (dd) => {
    try {
      await axios.post('http://localhost:3000/api/cart', dd);
    alert("Added to cart successfully!");
    navigate("/listUser")
    } catch (err) {
      console.log(err);
    }
  };


  
  
  return (
    <div>
       <NavbareUser/>
    <div className="product-details">
      <div className="product-image">
             
        <img class='img' src={detail.picture} alt="" />
      </div>  
      <div className="product-info">
        <h1>{detail.chocoName}</h1>
        <p>{detail.chocoDesc}</p>
        <h2>Price : ${detail.chocoPrice}</h2>
        <button onClick={()=>{add({cartName:detail.chocoName,cartPrice:detail.chocoPrice })}}>Add to Cart</button>
   
      </div>
    </div></div>
  );
};





export default ChocoDetails;