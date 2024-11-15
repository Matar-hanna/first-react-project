import React from 'react'
import './About.css'

import NavBAR2 from '../../Components/NAvBar2/NavBar2.jsx'
import Header2 from '../../Components/Header2/Header2.jsx'
import backGround from '../../assets/images/breadcrumb.webp'
import AboutIt from '../../Components/AboutIT/AboutIT.jsx'
import Team from '../../Components/Team/Team.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
export default function About() {
  return (
    <div>
      <NavBAR2 />
      <Header2  backGround={backGround} Title="About Us"/>
      <AboutIt />
      <Team />
      <Footer/>
    </div>
  )
}
