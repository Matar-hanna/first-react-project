import React from 'react'
import asterisk from '../../assets/images/asterisk.svg'

import { HiOutlineArrowLongRight } from 'react-icons/hi2'
export default function AboutIt() {
  return (
    <section className='d-flex justify-content-between gap-2 pt-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <img src={asterisk} className='h-50' />
            <h2>Cyber Security</h2>
        </div>
        <div  className='d-flex justify-content-between align-items-center'>
            <img src={asterisk} className='h-50' />
            <h2>IT Solutions</h2>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <img src={asterisk} className='h-50' />
            <h2>Technology</h2>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <img src={asterisk} className='h-50' />
            <h2>Data Security</h2>
        </div>
       
    </section>
  )
}
