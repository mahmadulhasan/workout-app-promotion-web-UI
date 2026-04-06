import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {

        // 1. Fade out hero top text while section is pinned
        gsap.to('#hero-top-text', {
            opacity: 0,
            scrollTrigger: {
                trigger: '#herosec',
                pin: true,          // ✅ only ONE pin on the section
                start: 'top top',   // ✅ fixed: start when section hits top
                end: '+=300',       // ✅ valid end: 300px of scroll
                scrub: true,
            }
        })

        // 2. Move phone image downward on scroll (no separate pin)
        gsap.to('#hero-main-img', {
            top: '120vh',            // ✅ animate FROM 50vh TO 80vh
            ease: 'none',
            scale: 0.7,
            scrollTrigger: {
                trigger: '#herosec',
                start: 'top top',
                end: '+=500',       // ✅ valid end value
                scrub: true,
                // ❌ removed: pin — was conflicting with section pin above
            }
        })

        // 3. Scale up the circle
        gsap.to('#hero-circle', {
            scale: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero-circle',  // ✅ trigger on the element itself
                start: 'top 80%',         // ✅ fixed: fires when circle enters viewport
                end: '+=400',
                scrub: true,
            }
        })

    }, [])

    return (
        <section
            id='herosec'
            className='min-h-[200vh] relative p-20 flex flex-col items-center justify-center overflow-hidden'
        >

            {/* CENTER PHONE */}
            <img
                id='hero-main-img'
                src="/hero-phone.webp"
                alt=""
                className="absolute top-[50vh] z-50"
            />

            {/* HERO TOP */}
            <div
                id='hero-top'
                className="h-[95vh] w-full rounded-[100px] bg-linear-to-r/oklab from-indigo-500 to-teal-400 relative overflow-hidden z-10"
            >
                <p
                    id='hero-top-text'
                    className="text-transparent text-[clamp(1.5rem,10vw,8rem)] w-full text-center font-semibold bg-linear-to-r/oklab from-black via-gray-700 to-black bg-clip-text"
                >
                    Start workout today
                </p>

                <img src="/circle-blue-p-500.webp" alt="" className="absolute" />

                <div className="flex flex-col w-full h-full">
                    <div className="w-full flex items-center justify-between">
                        <img src="/circle-blue-p-500.webp" alt="" />
                        <img src="/widget-hero-dark.webp" alt="" className="z-60 mr-100 mt-10" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <img src="/hero-watch.webp" alt="" className="z-60 ml-100 mb-50" />
                        <img src="/hero-element-p-500.webp" alt="" />
                    </div>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className="h-screen w-full flex items-center justify-center">
                <div
                    id='hero-circle'
                    className="w-50 h-50 flex items-center justify-center rounded-full shadow-[0_0_10px_4px_rgba(139,92,246,0.8)]"
                >
                    <div className="w-25 h-25 flex items-center justify-center rounded-full shadow-[0_0_10px_4px_rgba(139,92,246,0.8)]">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full shadow-[0_0_10px_4px_rgba(139,92,246,0.8)]" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero