import React from 'react'
import './Costumers.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import client1 from '../../assets/images/testiThumb3_1.webp'
import { SiComma } from 'react-icons/si'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import sittingGirl from '../../assets/images/ctaThumb1_1.webp'
import smallLines from '../../assets/images/ctaShape1_1.webp'
export default function Costumers() {
  return (
   <section className='sec-bg'>
    <div className='d-flex justify-content-center'>
    <div className='container  blue-cont'>
      <div className=' l-bg'>
       <div className='blue-container'>
        <img src={sittingGirl} className='sit-girl' />
        <div className='SUPPORT'>
        <p><HiOutlineArrowLongLeft/>Contact Us<HiOutlineArrowLongRight/></p>
        <h3>24/7 Expert Hosting Support Our Custmers Love</h3>
        </div>
        <img src={smallLines} className='small-lines' />
        <button className='WHITE-BTN'>TALK TO A SPECIALIST<HiOutlineArrowLongRight/> </button>

       </div>
      </div>
      </div>
    </div>
     
    <div className='text-center pt-5 heading pb-5'>
    
      <p><HiOutlineArrowLongLeft/>our services<HiOutlineArrowLongRight/></p>
      <h2>Our Awesome Pricing Plans</h2>
      </div>
      <div className=' container pt-5 flex-wrap gap-5 d-flex justify-content-between'>
        <div className='clientCard'>
            <div className='d-flex stars'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium reprehenderit atque ad</p>
            <div className='d-flex justify-content-between'>
            <div className='d-flex gap-2'>
                <img src={client1}/>
                <div>
                    <h5>Kristin Watson</h5>
                    <span>Web Developer</span>
                </div>
            
            </div>
            <div>
            <SiComma  className='comma'/>
            <SiComma  className='comma'/>
            </div>
        
            </div>
       
        </div>
        <div className='clientCard-blue'>
            <div className='d-flex stars'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium reprehenderit atque ad</p>
            <div className='d-flex justify-content-between'>
            <div className='d-flex gap-2'>
                <img src={client1}/>
                <div>
                    <h5>Kristin Watson</h5>
                    <span>Web Developer</span>
                </div>
            
            </div>
            <div>
            <SiComma  className='comma-blue'/>
            <SiComma  className='comma-blue'/>
            </div>
        
            </div>
       
        </div>
        <div className='clientCard'>
            <div className='d-flex stars'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium reprehenderit atque ad</p>
            <div className='d-flex justify-content-between'>
            <div className='d-flex gap-2'>
                <img src={client1}/>
                <div>
                    <h5>Kristin Watson</h5>
                    <span>Web Developer</span>
                </div>
            
            </div>
            <div>
            <SiComma  className='comma'/>
            <SiComma  className='comma'/>
            </div>
        
            </div>
       
        </div>
      </div>
      <div className='bottom-line'>

      </div>
   </section>
  )
}
