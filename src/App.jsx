import { useState } from 'react'
import './App.css'
import Navbar from './componentes/sections/Navbar.jsx'
import Presentation from './componentes/sections/Presentation.jsx'
import Projects from './componentes/sections/Projects.jsx'
import About from './componentes/sections/About.jsx'
import Footer from './componentes/sections/Footer.jsx'

function App() {

  return (
      <div className="App">
        <Navbar/>
        <Presentation/>
        <Projects/>
        <About/>
        <Footer/>
      </div>
  )
}

export default App
