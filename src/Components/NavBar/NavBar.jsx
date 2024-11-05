import './NavBar.css'
import logo from '../../assets/images/logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
export default function NavBar() {
  return (
    <nav className='mh-navbar'>
        
           <img src={logo} className='h-50' />
        
        
            <ul className=''>
                <li className='pl-2'>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
       
        <a href="#" className='photo'><IoSearchOutline /></a>
        <a href="#" className='photo'><FaCartShopping  className='cart'/></a>
       
        <button>GET A QUOTE <FaArrowRightLong /> </button>
    </nav>
  )
}

