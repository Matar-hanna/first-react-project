import React from 'react'
import './Header.css'
import person from '../../assets/images/heroThumb1_1.webp'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <header className='cover  d-flex justify-content-between'>
      <div className='col-lg-4  container hero'>
        <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        <h2>Business Innovation With IT Services Expertise </h2>
        <ul className='d-flex  justify-content-between'>
          <div>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          </div>
         <div>
         <li>Lorem ipsum dolor sit</li>
         <li>Lorem ipsum dolor sit</li>
         </div>
        </ul>
        <button>Get Started <FaArrowRightLong /> </button>
      </div>
      <div>
      <img src={person} className='w-50' />
      </div>
        
   

    </header>
  )
}
