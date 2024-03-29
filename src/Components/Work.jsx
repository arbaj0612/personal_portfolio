import React from 'react'
import WorkImg from "../assets/projects/workImg.jpeg"
import realEState from "../assets/projects/realestate.jpg"
import blogMaker from "../assets/projects/blogimg.png"

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#1D9CA8] text-gray-300'>Work</p>
                    <p className='py-6'>&#47;&#47; Check out some of my recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                     {/* Grid Item */}
                     <div style={{backgroundImage:`url(${blogMaker})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
                        {/* Hover Effect */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS application
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' href="https://blog-project-dsfv.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a target='_blank' href="https://github.com/arbaj0612/react_series/tree/main/13BlogProject">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{backgroundImage:`url(${WorkImg})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
                        {/* Hover Effect */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                     {/* Grid Item */}
                    <div style={{backgroundImage:`url(${realEState})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
                        {/* Hover Effect */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
