import React from 'react'
import './Pricing.css'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight, HiOutlineXMark } from 'react-icons/hi2'
import arrow from '../../assets/images/pricingIcon1_2.svg'
import cloud from '../../assets/images/pricingIcon1_1.svg'
import { GiCheckMark } from 'react-icons/gi'
import { RxQuestionMarkCircled } from 'react-icons/rx'
import diamond from '../../assets/images/pricingShape1_2.webp'
import hand from '../../assets/images/pricingShape1_1.webp'

export default function Pricing() {
  return (
    <section>
      
      <div className='text-center pt-5 heading'>
      <div className='d-flex justify-content-between align-items-center'>
        <p></p>
      <p><HiOutlineArrowLongLeft/>our services<HiOutlineArrowLongRight/></p>
      <img src={diamond} className='dimondImg' />
      </div>
      <h2>Our Awesome Pricing Plans</h2>
     
     
      </div>
     
      <div className='d-flex justify-content-center gap-3 items'>
        <span><button className='MH-btn'>Monthly</button>Yearly</span>
        <img src={arrow} className='arrowImg' />
        <p>Save 25%</p>
      </div>
      <div className='sec'>
      <img src={hand} className='handImg' />
      <div className='container d-flex justify-content-between pt-5 flex-wrap pb-5'>
        <div className='b-card col-lg-4 col-sm-12'>
          <div className='d-flex justify-content-between s-card'>
              <div>
                <h3>Regular Plans</h3>
                <span className='d-flex'>$49 <p>/Month</p></span>
              </div>
              <img src={cloud} alt="" />
          </div>
          <div className='ul-list'>
            <ul>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>100GB SSD Storage</div><RxQuestionMarkCircled/> </li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Weekly Backups</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Unlimited Free SSl</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>24/7 System Monitoring</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Free Domain ($9.99 Value)</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><HiOutlineXMark className='xMArk'/> Frame 164236</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><HiOutlineXMark className='xMArk'/>20+ Payments Methods</div><RxQuestionMarkCircled/></li>
            </ul>
          </div>
          <button className='card-btn'>Get Started Now<HiOutlineArrowLongRight/> </button>
        </div>
        <div className='b-card col-lg-4 col-sm-12'>
          <div className='d-flex justify-content-between s-card-d'>
              <div>
                <h3>Regular Plans</h3>
                <span className='d-flex'>$49 <p>/Month</p></span>
              </div>
              <img src={cloud} alt="" />
          </div>
          <div className='ul-list'>
            <ul>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>100GB SSD Storage</div><RxQuestionMarkCircled/> </li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Weekly Backups</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Unlimited Free SSl</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>24/7 System Monitoring</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Free Domain ($9.99 Value)</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><HiOutlineXMark className='xMArk'/> Frame 164236</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><HiOutlineXMark className='xMArk'/>20+ Payments Methods</div><RxQuestionMarkCircled/></li>
            </ul>
          </div>
          <button className='card-btn-d'>Get Started Now<HiOutlineArrowLongRight/> </button>
        </div>
        <div className='b-card col-lg-4 col-sm-12'>
          <div className='d-flex justify-content-between s-card'>
              <div>
                <h3>Regular Plans</h3>
                <span className='d-flex'>$49 <p>/Month</p></span>
              </div>
              <img src={cloud} alt="" />
          </div>
          <div className='ul-list'>
            <ul>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>100GB SSD Storage</div><RxQuestionMarkCircled/> </li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Weekly Backups</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Unlimited Free SSl</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>24/7 System Monitoring</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><GiCheckMark className='checkMark'/>Free Domain ($9.99 Value)</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><HiOutlineXMark className='xMArk'/> Frame 164236</div><RxQuestionMarkCircled/></li>
              <li className='d-flex justify-content-between'><div><HiOutlineXMark className='xMArk'/>20+ Payments Methods</div><RxQuestionMarkCircled/></li>
            </ul>
          </div>
          <button className='card-btn'>Get Started Now<HiOutlineArrowLongRight/> </button>
        </div>
      </div>
      </div>
     
      
      
    </section>
  )
}


