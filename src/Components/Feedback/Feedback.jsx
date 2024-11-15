import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import manImg from '../../assets/images/ctaThumb.webp'
import ctaLines from '../../assets/images/ctaShape2_4.webp'
import circleLines from '../../assets/images/ctaShape2_1.webp'
export default function Feedback() {
  return (
    
    <div className='container l-bg blue-cont-man coco'>
    <div className=' d-flex justify-content-between align-items-center'>
       <div className='images'>
       <img src={manImg} className='manimg' />
       <img src={circleLines}  />
       </div>
       
        <h4>Stay Connected With Cutting Edge IT</h4>
        <img src={ctaLines} className='ctalines' />
        <button className='WHITE-BTN'>TALK TO A SPECIALIST<HiOutlineArrowLongRight/> </button>
        </div>
</div>
  )
}
