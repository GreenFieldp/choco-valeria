import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './ChocolateCard.css';
import PhotoGrid from './PhotoGrid.jsx';
import NavbareUser from './salah/navbareUser.jsx';


const ListeUser = () => {
  const [chocolates, setChocolates] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/choco');
        setChocolates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);


  return (

  <div className='banner '>
    <NavbareUser/>
    <div className="AllCard">
     {chocolates.map((image) => (
     <PhotoGrid key={image.id} image={image} />))}
    </div></div>
  );
};

export default ListeUser;
