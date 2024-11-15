import './NavBar.css'
import logo from '../../assets/images/logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function NavBar() {
  const [isOpen, setISOpen] = useState(false);
  const handleOpen = () => {
    setISOpen (!isOpen)
  }
  return (
    <nav className='mh-navbar'>
           <img src={logo} className='h-50' />
          
            <ul className={`MH-navTogle ${ isOpen ? "open" : ""}`}>
                <li>
                  <Link to={'/'} >Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/services'}>Services</Link>
                </li>
                <li>
                  <Link>Pages</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
            <div className='d-flex photo'>
            <a href="#"><IoSearchOutline /></a>
            <a href="#"><FaCartShopping/></a>
            </div>
           
        <button>GET A QUOTE <FaArrowRightLong /> </button>
        <div className='toggle'>
        <IoMdMenu onClick={handleOpen} />
        </div>
    </nav>
  )
}

