import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import IT from '../../Components/IT/IT'
import Pricing from '../../Components/Pricing/Pricing'
import Costumers from '../../Components/Costumers/Costumers'
import News from '../../Components/News/News'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <IT/>
      <Pricing/>
      <Costumers/>
      <News/>
      <Footer/>
    </div>
  )
}
