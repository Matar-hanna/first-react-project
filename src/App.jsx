import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact.jsx';

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
