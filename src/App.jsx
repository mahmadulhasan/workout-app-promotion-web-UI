import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import Hero from './component/Hero'

const App = () => {
  const cursor = useRef(null)
  useGSAP(()=>{

    
    const cursorcordi = (e) =>{
      const { clientX, clientY } = e
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: 0.1
      })
    }
    window.addEventListener("mousemove", cursorcordi)
  })
  return (
    <main className='relative cursor-none min-h-screen'>

      <div ref={cursor} className="fixed top-0 left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_10px_4px_rgba(139,92,246,0.8)] z-999"></div>

      <Hero />
      
    </main>
  )
}

export default App
