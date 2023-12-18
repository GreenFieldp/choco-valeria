import React from 'react';
import './css.css'
import { Link } from 'react-router-dom';


const PhotoGrid = ({ image }) => (
       

   //   <div class="card">
   //   <div class="image"><img src={image.picture} alt={"flavor"} className="ganache-image" /></div>
   //      <span class="title">{image.chocoName}</span>
   //     <span class="price">{`${image.chocoPrice} DT`}</span>
   //   </div>
  <Link to={`/ChocoDetails/${image.chocoName}`}> <div class="card">
        <img class="imga"src= {image.picture} alt=""/>
          <span class="title">{image.chocoName}</span>
          <span class="price">{`${image.chocoPrice} DT`}</span>
        </div></Link>
  );
  

  

  export default  PhotoGrid