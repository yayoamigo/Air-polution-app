import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillMicFill, BsGearFill} from 'react-icons/bs';
import {FiArrowLeft} from 'react-icons/fi';


export const Nav = () => {

  return (
    <header>
     <nav className='navBar'>
      <button type='button'>
       <Link className="link" to="/"> 
        <FiArrowLeft/>
       </Link>  
      </button>
      <h1> Air polution app</h1>
      <div className='sideBar'>
      <BsFillMicFill/>
      <BsGearFill/>
      </div>
     </nav>
    </header>
  )
}
