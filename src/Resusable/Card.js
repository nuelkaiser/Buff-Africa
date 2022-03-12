import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Card.css'

function Card({img, alt, h1, p}) {
  return (
    <>
     <div className='card-container'>
       <img className='img' src={img} alt={alt}/>

       <div className='card-inner'>
         <h1>{h1}</h1>
         <p>{p}</p>

         <Link to={'about'} className='learn'>
          Learn More 
          <AiOutlineArrowRight />
         </Link>
       </div>
    </div> 
    </>
  )
}

export default Card