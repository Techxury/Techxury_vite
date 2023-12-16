import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <>
                    <h1 className='container text-2xl my-3 mx-10'>Comments:</h1><br />
            <div className='container mx-auto my-6 flex justify-around gap-4 flex-wrap'>

                <div className='w-80 border-2 border-black'>
                    <div className='flex gap-3 border border-black px-2 py-2'>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./img/final.webp" alt="" />
                        <h2 className='text-xl my-auto'>Error 404</h2>
                    </div>
                    <div className='bg-gray-800 px-2 py-1' >
                        <p className='text-white text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius nemo harum sequi doloribus dolores temporibus nostrum hic optio eos? ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam?</p>
                    </div>
                </div>

                <div className='w-80 border-2 border-black'>
                    <div className='flex gap-3 border border-black px-2 py-2'>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./img/final.webp" alt="" />
                        <h2 className='text-xl my-auto'>Error 404</h2>
                    </div>
                    <div className='bg-gray-800 px-2 py-1' >
                        <p className='text-white text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius nemo harum sequi doloribus dolores temporibus nostrum hic optio eos? ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam?</p>
                    </div>
                </div>


                <div className='w-80 border-2 border-black'>
                    <div className='flex gap-3 border border-black px-2 py-2'>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./img/final.webp" alt="" />
                        <h2 className='text-xl my-auto'>Error 404</h2>
                    </div>
                    <div className='bg-gray-800 px-2 py-1' >
                        <p className='text-white text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius nemo harum sequi doloribus dolores temporibus nostrum hic optio eos? ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam?</p>
                    </div>
                </div>

                

            </div>

            <div className='container mx-auto my-6 flex justify-around gap-4 flex-wrap'>
            
                <div className='w-80 border-2 border-black'>
                    <div className='flex gap-3 border border-black px-2 py-2'>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./img/final.webp" alt="" />
                        <h2 className='text-xl my-auto'>Error 404</h2>
                    </div>
                    <div className='bg-gray-800 px-2 py-1' >
                        <p className='text-white text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius nemo harum sequi doloribus dolores temporibus nostrum hic optio eos? ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam?</p>
                    </div>
                </div>

                <div className='w-80 border-2 border-black'>
                    <div className='flex gap-3 border border-black px-2 py-2'>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./img/final.webp" alt="" />
                        <h2 className='text-xl my-auto'>Error 404</h2>
                    </div>
                    <div className='bg-gray-800 px-2 py-1' >
                        <p className='text-white text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius nemo harum sequi doloribus dolores temporibus nostrum hic optio eos? ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam?</p>
                    </div>
                </div>


                <div className='w-80 border-2 border-black'>
                    <div className='flex gap-3 border border-black px-2 py-2'>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./img/final.webp" alt="" />
                        <h2 className='text-xl my-auto'>Error 404</h2>
                    </div>
                    <div className='bg-gray-800 px-2 py-1' >
                        <p className='text-white text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius nemo harum sequi doloribus dolores temporibus nostrum hic optio eos? ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam?</p>
                    </div>
                </div>

                

            </div>
            <div className='w-9/12 border-2 mx-auto my-5'>

                <label htmlFor="" className='text-md font-bold'>Post your Comments:</label>
                <input class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" placeholder="Post your best comments for Developer motivation" type="text" name="text"/>
                <div className='my-2'>
                    <NavLink
                        className="flex w-full h-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default About
