import React, { useState } from 'react'
import './FrontCard.css'
const FrontCard = ({ formData }) => {
  const { cardNum, cardHolderName, expireMonth, expireYear } = formData;

  return (
    <div className='frontmain'>
      <div className="circlecontainer">
        <div className='bigcircle'></div>
        <div className="smallcircle"></div>
      </div>

      <div className="card-details">
        <div className='cardNumber'>
          {cardNum || "0000 0000 0000 0000"}
        </div>
        <div className='personaldetails'>
          <div className="cardName">
            {cardHolderName || "Jane AppleSeed"}
          </div>
          <div className="expiry">
            {(expireMonth || '00')}/{(expireYear || '00')}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontCard