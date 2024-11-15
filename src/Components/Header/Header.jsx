import React from 'react'
import './Header.css'
import person from '../../assets/images/heroThumb1_1.webp'
import profiles from '../../assets/images/profileShape1_1.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import lines from '../../assets/images/heroShape1_1.webp'
import clock from '../../assets/images/heroShape1_3.webp'
import company1 from '../../assets/images/brandLogo1_1.svg'
import company2 from '../../assets/images/brandLogo1_2.svg'
import company3 from '../../assets/images/brandLogo1_3.svg'
import company4 from '../../assets/images/brandLogo1_4.svg'
import company5 from '../../assets/images/brandLogo1_5.svg'
import { CiWavePulse1 } from 'react-icons/ci';
import { GiCheckMark } from 'react-icons/gi';
export default function Header() {
  return (
    <header>
      <div className='cover'>
      <div className=' hero1' >
      <div className='col-lg-4 col-sm-12  hero'>
        <p className='paragraph'><CiWavePulse1 />Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        <h2>Business Innovation With IT Services Expertise </h2>
        <ul className='d-flex hero-ul gap-4'>
          <div>
          <li><GiCheckMark />Lorem ipsum dolor</li>
          <li><GiCheckMark />Lorem ipsum dolor</li>
          </div>
         <div>
         <li><GiCheckMark />Lorem ipsum dolor</li>
         <li><GiCheckMark />Lorem ipsum dolor</li>
         </div>
        </ul>
        <div className='pt-3 pb-5'>
        <button className=''>Get Started <FaArrowRightLong /> </button>

        </div>
        <div className='pt-5'>
          <div className='p-3 cards'>
            <div className='d-flex'>
            <div className='smallCards'>
             <h6 className='d-flex'><FaStar/>Trustipilot</h6>
             <img src={profiles} className='w-100' />
            </div>
            <div className='caption'>
              <FaStar />
            <FaStar />
           <FaStar />
           <p>450+reviews</p>
          </div>
            </div>
     
      
            <div className='d-flex'>
          <div className='smallCards'>
          <h6 >Google</h6>
          <img src={profiles} className='w-100' />
          </div>
          <div className='caption'>
           <FaStar />
           <FaStar />
           <FaStar />
           <p>450+reviews</p>
          </div>
            </div>
     
          </div>
        </div>
       
       
      </div>
      <div className=' col-lg-4 col-sm-12 all-photo'> 
        <img src={lines} className=' Lines ' />
        <img src={person} className=' Person' />
        
      </div>
      
    </div>
      {/* <div className=''>
        <img src={clock} className='Clock' />
      </div> */}
      </div>
      <div className="clock">
        <div className=" circle1"></div>
        <img src={clock} className='Clock clock1' />
        <div className=" circle2"></div>
      </div>
      
     <div className='container d-flex justify-content-between flex-wrap pb-5'>
      <img src={company1} className='' />
      <img src={company2} className='' />
      <img src={company3} className='' />
      <img src={company4} className='' />
      <img src={company5} className='' />
     </div>
       
   

    </header>
  )
}
