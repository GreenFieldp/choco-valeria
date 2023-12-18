import React from 'react';
import './ChocolateCard.css';

const ChocolateCard = ({chocolate}) => {
 return (
  <div class="container-img">  
      <img src={chocolate.picture} alt="Sandwich"  style={{width:"100%"}} />
      <div class="infos-hover">
          <i class="fa fa-eye"></i>
          <p>descover</p>
     </div>
      <h2>{chocolate.chocoName}</h2>
      <p>{`${chocolate.chocoPrice} DT`}</p>
    </div>
 );
};

export default ChocolateCard;