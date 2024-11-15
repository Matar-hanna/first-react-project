import React from 'react'
import './Footer.css'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

import logo from '../../assets/images/logo.svg'
import footerp1 from '../../assets/images/footerThumb1_1.webp'
import footerp2 from '../../assets/images/footerThumb1_2.webp'
import { FaAngleDoubleRight, FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Form, InputGroup } from 'react-bootstrap'
import { ImLocation } from 'react-icons/im'
import { MdAttachEmail } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
export default function Footer() {
  return (
    <section className=' d-bg'>
      
        
        <div className='container d-bg'>
<ul className='d-flex justify-content-between row footer-li'>
    <li className='col-lg-3 col-sm-12'>
       <img src={logo} className='' /> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit recusandae </p>
        <div className='d-flex gap-3'>
        <FaFacebookF className='icon'/>
        <FaTwitter className='icon'/>
        <FaYoutube className='icon'/>
        <FaInstagram className='icon'/>
        </div>
    </li>
    <li className='col-lg-2 col-sm-12'>
        <ul className='footer-li'> 
            <h4>Quick Links</h4>
            <li ><FaAngleDoubleRight /> Extech About</li>
            <li><FaAngleDoubleRight /> Extech About</li>
            <li><FaAngleDoubleRight /> Extech About</li>
            <li><FaAngleDoubleRight /> Extech About</li>
            <li><FaAngleDoubleRight /> Extech About</li>
        </ul>
    </li>
    <li className='col-lg-2 col-sm-12'>
        <ul className='footer-li'>
            <h4>Resent Posts</h4>
            <li className='pt-3'>
                <div className='footer-photos'>
                    <img src={footerp1} className='footerImg' />
                    <div>
                        <span>15th April,2024</span>
                        <h5>Top 5 Most Famous Technology Trend In 2024</h5>
                    </div>
                </div>
            </li>
            <li className='pt-3'>
                <div className='footer-photos'>
                    <img src={footerp2} className='footerImg' />
                    <div>
                        <span>20th June,2024</span>
                        <h5>The Surfing Man Will Blow Your Mind </h5>
                    </div>
                </div>
            </li>
            
           
        </ul>
    </li>
    <li className='col-lg-3'>
        <ul  className='footer-li'>
            <h4>Contact Us</h4>
            <li><FaEnvelope /> info@example.com</li>
            <li><FaPhoneAlt /> +208-6666-0112</li>
            <li>
            <InputGroup className='input'  >
            <Form.Control
          placeholder="Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
            <button className='footer-btn'><HiOutlineArrowLongRight/></button>
            </InputGroup>
            </li>
            <li>
            <Form>
      {['I agree to the privacy policy'].map((type) => (
        <div key={`default-${type}`} className="mb-3 checkbox">
          <Form.Check 
            type={type}
            
            label={`${type}`}
          />
        </div>
      ))}
    </Form>
            </li>
            
        </ul>
    </li>
</ul>
        </div>
        <div className='footer-blue-background'>
            <div className='container d-flex justify-content-between align-items-center'>
                <p>@ All CopyRight 2024 by Extech</p>
                <div className='d-flex gap-2'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </section>
  )
}
