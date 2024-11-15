import React from 'react'
import './Team.css'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import Team1 from '../../assets/images/04.webp'
import Team2 from '../../assets/images/05.webp'
import Team3 from '../../assets/images/06.webp'
import Team4 from '../../assets/images/07.webp'
import envato from '../../assets/images/envato.png'
import { ImLocation } from 'react-icons/im'
import { MdAttachEmail } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
export default function Team() {
  return (
    <section>
        <div className='container pt-5'>
            <div className=' MH-title row '>
                <p><HiOutlineArrowLongLeft/>Team Members<HiOutlineArrowLongRight/></p>
                <div className='d-flex justify-content-between'>
                    <h2>Our Dedicated Team Members</h2>
                    <button>All Members <HiOutlineArrowLongRight/></button>
                </div>
            </div>
            <div className=' m-cards pb-5'>
                <div  className='col-lg-3 member-card'>
                    <img src={Team1} className='card-img' />
                    <div className='card-text'>
                        <h4>marslm sldkpkd</h4>
                        <span>web designer</span>
                    </div>
                </div>
                <div className='col-lg-3 member-card'>
                    <img src={Team2} className='card-img' />
                    <div className='card-text'>
                        <h4>marslm sldkpkd</h4>
                        <span>web designer</span>
                    </div>
                </div>
                <div className='col-lg-3 member-card'>
                    <img src={Team3}  className='card-img' />
                    <div className='card-text'>
                        <h4>marslm sldkpkd</h4>
                        <span>web designer</span>
                    </div>
                </div>
                <div className='col-lg-3 member-card'>
                    <img src={Team4}  className='card-img' />
                    <div className='card-text'>
                        <h4>marslm sldkpkd</h4>
                        <span>web designer</span>
                    </div>
                </div>
            </div>
            <div className='text-center pt-5 lines'>
                <p>1k+ Brands Trust Us </p>
            </div>
            <div className='d-flex justify-content-between pb-5'>
                <img src={envato} className='envato-img' />
                <img src={envato} className='envato-img' />
                <img src={envato} className='envato-img' />
                <img src={envato} className='envato-img' />
                <img src={envato} className='envato-img' />
               
            </div>
        
        </div>
        <div className='d-bg-footer'>
        <div className='container footer-blue '>
        <div className=' gap-2 blue-fdiv'>
        <ImLocation className='footer-blue-icons'/>
        <div>
           <span>Address</span>
           <h4>4686 Rocky Road Philadelphia PA</h4>
        </div>
        </div>
        <div className='d-flex gap-2 blue-secdiv'>
        <MdAttachEmail className='footer-blue-icons'/>
        <div>
        <span>Send Email</span>
        <h4>Info@example.com</h4>
        </div>
        </div>
        <div className='d-flex gap-2'>
        <BiSolidPhoneCall className='footer-blue-icons' />
        <div>
        <span>Call Emergency</span>
        <h4>+88 0123 654 99</h4>
        </div>
       
        </div>
       </div>
        </div>
       
    </section>
  )
}
