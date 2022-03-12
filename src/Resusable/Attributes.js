import React from 'react';
import './Attributes.css';


function Attributes({ img, h2, p}) {
  return (
    <>
        <div className='attr-container'>
          <div className='icon-container'>
            {img}
          </div>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    </>
  )
}

export default Attributes