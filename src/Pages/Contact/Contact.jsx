import React from 'react'
import NavBAR2 from '../../Components/NAvBar2/NavBar2'
import Header2 from '../../Components/Header2/Header2'
import backGround from '../../assets/images/breadcrumb.webp'
import GetStarted from '../../Components/GetStarted/GetStarted'
import Footer from '../../Components/Footer/Footer'

export default function Contact() {
  return (
    <div>
        <NavBAR2 />
        <Header2 backGround={backGround} Title="Contact Us" />
        <GetStarted />
        <Footer/>
    </div>
  )
}
