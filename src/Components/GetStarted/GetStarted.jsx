import React from 'react'
import './GetStarted.css'
import video from '../../assets/images/video.webp'
import { ImLocation } from 'react-icons/im'
import { MdAttachEmail } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { Form, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
export default function GetStarted() {
  return (
    <section>
        <div className='container d-flex justify content-center pt-5 gap-5 pb-5 flex-wrap'>
            <div className='col-lg-6 col-sm-12 start-card'>
                <div className=' footer-blue-contact '>
                    <div className='textPadding'>
                        <div className='d-flex gap-2 blue-fdiv-contact pt-3'>
                            <BiSolidPhoneCall className='footer-blue-contact-icons' />
                            <div>
                                <span>Call Emergency</span>
                                <h4>+88 0123 654 99</h4>
                            </div>
                        </div>
                        <div className='d-flex gap-2 blue-secdiv-contact pt-3'>
                            <MdAttachEmail className='footer-blue-contact-icons'/>
                            <div>
                                <span>Send Email</span>
                                <h4>Info@example.com</h4>
                            </div>
                        </div>
                        <div className='d-flex gap-2 pt-3'>
                            <ImLocation className='footer-blue-contact-icons'/>
                            <div>
                                <span>Address</span>
                                <h4>4686 Rocky Road Philadelphia PA</h4>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src={video} className='Video-Image' />
                    </div>
                </div>
            </div>
            <div className='col-lg-5 col-sm-12 pt-5 about-form'>
                <h2>Ready to Get Started</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequuntur quidem ipsa inventore animi, debitis,</p>
                <div>
                <Form>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Your Name*</Form.Label>
                        <Form.Control type="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Your Email*</Form.Label>
                        <Form.Control type="Email" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Message*</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                </Form>
                <button className='about-btn'>Send Message<HiOutlineArrowLongRight/></button>
                </div>
            </div>
            
        </div>

        <div className='map'>
        <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106696.75885516497!2d44.438133536135425!3d33.311658968933955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2z2KjYutiv2KfYr9iMINio2LrYr9in2K8g2YXYrdin2YHYuNip2Iwg2KfZhNi52LHYp9mC!5e0!3m2!1sar!2s!4v1724061430275!5m2!1sar!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className='d-bg-footer'>
        <div className='container footer-blue '>
        <div className='d-flex gap-2 blue-fdiv'>
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
