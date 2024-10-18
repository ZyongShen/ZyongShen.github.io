import React from 'react';
import goLogo from '../assets/Go-Logo_Blue.png';
import pythonLogo from '../assets/Python-logo-notext.svg.png'


function Projects() {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                    Projects
                </p>
                <p className='py-6 text-2xl'>Some of my personal projects</p>
                </div>
        {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                <div
                    style={{ backgroundImage: `url(${pythonLogo})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Reddit Summary App
                    </span>
                    <p className='text-center'>A Python desktop application that displays the top 5 newest or most popular recent posts from any Subreddit</p>
                    <div className='pt-8 text-center'>
                        {/* <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a> */}
                        <a href='https://github.com/ZyongShen/Reddit_Summary'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${pythonLogo})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Covid Near Me
                    </span>
                    <p className='text-center'>A Python desktop application for users to search by town to find the number of Covid cases in the town or checks the users IP address to find the number of Covid cases close to them</p>
                    <div className='pt-8 text-center'>
                        {/* <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a> */}
                        <a href='https://github.com/ZyongShen/Covid_Near_Me'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${goLogo})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Golang CLI To-Do List
                    </span>
                    <p className='text-center'>A To-Do list CLI application written in Golang</p>
                    <div className='pt-8 text-center'>
                        {/* <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a> */}
                        <a href='https://github.com/ZyongShen/Go-CLI-Todo'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects