import React from 'react'

const Hero = () => {
    return (
        <section className='min-h-[200vh] relative p-20 flex flex-col items-center justify-center'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/hero-phone.webp" alt="" className="z-50" />
            </div>

            <div className="h-[95vh] w-full rounded-[100px] bg-linear-to-r/oklab from-indigo-500 to-teal-400">
                <p className="text-transparent text-[clamp(1.5rem,10vw,8rem)] w-full text-center font-semibold bg-linear-to-r/oklab from-black via-gray-700 to-black bg-clip-text">Start workout today</p>
                
                <div className="w-full flex items-center justify-between">
                    <img src="/" alt="" className="" />
                    <img src="" alt="" className="" />
                </div>
                <div className="w-full flex items-center justify-between">
                    <img src="" alt="" className="" />
                    <img src="" alt="" className="" />
                </div>
            </div>

            <div className="h-[100vh]"></div>

        </section>
    )
}

export default Hero
