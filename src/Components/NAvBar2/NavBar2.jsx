import React, { useState } from 'react'
import './NavBar2.css'
import plane from '../../assets/images/plane.webp'
import logo from '../../assets/images/logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
export default function NavBAR2() {
  const [isOpen, setISOpen] = useState(false);
  const handleOpen = () => {
    setISOpen (!isOpen)
  }
  return (
   
    
    <nav className='mh-navbar2'>
        <img src={plane} className='h-75 planeimg' />
        
          <img src={logo} className='h-50' />
     
     
          <ul className={`MH-navTogle2 ${ isOpen ? "open" : ""}`}>
            <Link className='pl-2' to={'/'} >Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/services'}>Services</Link>
            <li>Pages</li>
            <li>Blog</li>
            <Link to={'/contact'}>Contact</Link>
          </ul>
          <div className='d-flex roro'>
              <a href="#" className='photo'><IoSearchOutline /></a>
              <div className='toggle'>
                <IoMdMenu onClick={handleOpen} />
              </div>
          </div>
              
      <div className='but-navbar2'> 
          <button>GET A QUOTE <FaArrowRightLong /> </button>
      </div>
      
        
    
 </nav>
  
  )
}
