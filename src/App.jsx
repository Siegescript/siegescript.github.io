import { useState } from 'react'
import Background from './sections/Background'

function App() {

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-[#b55fe6] selection:text-black">
      
      <main className="space-y-12">
        <Background/>
      </main>
    </div>
  )
}

export default App
