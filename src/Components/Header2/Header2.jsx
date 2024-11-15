import './Header2.css'
import React from 'react'
import leftimg from '../../assets/images/element.webp'
import rightimg from '../../assets/images/line-element.webp'
export default function Header2({backGround ,Title}) {
  return (
    <div className='hero2'>
        <img src={backGround} className='bg-img' alt="" />
        <img src={leftimg} className='left' alt="" />
        <img src={rightimg} className='right' alt="" />
        <div className='midle'>
            <h2>{Title}</h2>
            <p>Home - {Title}</p>
        </div>
        
    </div>
  )
}
