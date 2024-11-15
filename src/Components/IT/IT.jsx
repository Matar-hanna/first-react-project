import React from 'react'
import './IT.css'
import firstPhoto from '../../assets/images/serviceIcon1_2.svg'
import secondPhoto from '../../assets/images/serviceIcon1_3.svg'
import thirdPhoto from '../../assets/images/serviceIcon1_4.svg'
import forthPhoto from '../../assets/images/serviceIcon1_1.svg'
import videoImg from '../../assets/images/video.webp'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
export default function () {
  return (
    <section className=' pt-5'>
      <div className='container'>
      <div className=' MH-title row '>
          <div className='w-50'>
          <p><HiOutlineArrowLongLeft/>our services<HiOutlineArrowLongRight/></p>
          <h2>Elevating Businesses With IT Ingenuity</h2>
          </div>
          <div className='d-flex justify-content-end gap-2'>
          <HiOutlineArrowLongLeft className='arrowl'/>
          <HiOutlineArrowLongRight  className='arrowr'/>
          </div>
           

        </div>
      </div>
        
        <div className='container d-flex justify-content-between pt-3 flex-wrap pb-5'>
          <div className='MH-card col-lg-4 col-sm-12'>
            <img src={firstPhoto} className='pb-3' />
            <h3>Woo Commerce</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea minima quas atque nemo eaque laborum, a eum amet?</p>
            <button>Read more</button>
          </div>
          <div className='MH-card col-lg-3 col-sm-12'>
            <img src={secondPhoto} className='pb-3' />
            <h3>CRM Solutions</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea minima quas atque nemo eaque laborum, a eum amet?</p>
            <button>Read more</button>
          </div>
          <div className='MH-card col-lg-3 col-sm-12'>
            <img src={thirdPhoto} className='pb-3'  />
            <h3>Web Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea minima quas atque nemo eaque laborum, a eum amet?</p>
            <button>Read more</button>
          </div>
          <div className='MH-card col-lg-3 col-sm-12'>
            <img src={forthPhoto} className='pb-3'  />
            <h3>Data Guard Sentinel</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea minima quas atque nemo eaque laborum, a eum amet?</p>
            <button>Read more</button>
          </div>
        </div>
        
        <section className=' blue-section'>
        <div className='d-flex justify-content-center pt-5'>
          <img src={videoImg} className=' videoImage' />
        </div>
        <div className=' container numbers'>
          <div className='number'>
            <h2>01</h2>
            <h4>Requirement</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate alias facilis animi </p>
          </div>
          <div className='number'>
            <h2>02</h2>
            <h4>Requirement</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate alias facilis animi </p>
          </div>
          <div className='number'>
            <h2>03</h2>
            <h4>Requirement</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate alias facilis animi </p>
          </div>
          <div className='number'>
            <h2>04</h2>
            <h4>Requirement</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate alias facilis animi </p>
          </div>
        </div>
        </section>
       
    </section>
  )
}
