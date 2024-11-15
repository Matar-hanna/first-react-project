import React from 'react'
import './News.css'

import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import CardNews from '../CardNews/CardNews'
import Feedback from '../Feedback/Feedback'
export default function News() {
  return (
    <section>
        <div className='container pt-5'>
            <div className=' MH-title row '>
          <div className='w-50'>
          <p><HiOutlineArrowLongLeft/>Blog & News<HiOutlineArrowLongRight/></p>
          <h2>Featured News And Insights</h2>
          </div>
          <div className='d-flex justify-content-end gap-2'>
          <HiOutlineArrowLongLeft className='arrowl'/>
          <HiOutlineArrowLongRight  className='arrowr'/>
          </div>
            </div>
            </div>
        <CardNews/>
        <Feedback/>
        
    </section>
  )}