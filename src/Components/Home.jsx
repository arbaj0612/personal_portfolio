import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
                <p className='text-[#1D9CA8]'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arbaj Mulani</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I&apos;m a Front End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm a passionate front-end developer dedicated to crafting
                    seamless  and engaging web experiences,
                    merging creativity with technical expertise
                    to  transform ideas into visually stunning and user-friendly interfaces.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-[#1D9CA8]'>View Work
                    <span className='group-hover:rotate-90  duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
