import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto  px-4 md:px-20 flex flex-col md:flex-row my-10   '>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-2'>
        <div className='space-y-10'>
             <h1 className='text-4xl font-semibold'>Hello, Welcomes here to learn something new with {" "} <span className='text-pink-600'>Prime Book!!!</span></h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit doloremque blanditiis explicabo cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, eum.
            </p>

        </div>
        <div className='mt-8 space-y-3'>
       <div>
       <label className="input validator w-2/3 bg-white text-black dark:text-white dark:bg-base-300">
             <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
            </svg>
            <input type="email" placeholder="mail@primebook.com" required />
         </label>
        <div className="validator-hint hidden">Enter valid email address</div>
       </div>
        <button className="btn btn-secondary">Send</button>
        </div>
           
        </div>
        <div className='w-1/2 mt-2 order-1 md:order-2'>
        <img  draggable="false" src={banner} alt="banner" />
        </div>
    </div>
  )
}

export default Banner