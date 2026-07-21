import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Background from './sections/Background'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-[#b55fe6] selection:text-black">
      
      <Navbar />
      <main className="space-y-12">
        <Hero/>
        <Background/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  ) 
}

export default App
