import React, { useState, useEffect, useRef } from 'react'
// import { VANTA } from 'vanta';

import MnCourses from '../Main/MnCourses'
import Cr_heading from './Cr_heading'
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
function Courses() {


  return (
    <>
      <Cr_heading />
      {/* <MnCourses /> */}
      
        <div className='container mx-auto flex justify-evenly flex-wrap border-2 text-black py-3 mt-2 z-50'>
          <div className='border bg-white'><div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
            <div >
              <div className=' ml-2'>
                <h6 className='text-left text-base '>Web development</h6>
                <h4 className='text-left text-3xl font-semibold'>Data Mining</h4>

                <p className='mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize '>narendra Modi </p>

              </div>
              <div className='flex justify-between mx-2 my-2'>
                <div className='flex text-sm my-auto'><FaBook className=' my-auto mr-1' />9 Lesson</div>
                <div className='flex text-sm my-auto'><IoMdTime className=' my-auto mr-1' />3hr</div>
              </div>
              <hr className='mx-2 border-black' />
            </div></div>

          <div><div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
            <div >
              <div className=' ml-2'>
                <h6 className='text-left text-base '>Web development</h6>
                <h4 className='text-left text-3xl font-semibold'>Data Mining</h4>

                <p className='mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize '>narendra Modi </p>

              </div>
              <div className='flex justify-between mx-2 my-2'>
                <div className='flex text-sm my-auto'><FaBook className=' my-auto mr-1' />9 Lesson</div>
                <div className='flex text-sm my-auto'><IoMdTime className=' my-auto mr-1' />3hr</div>
              </div>
              <hr className='mx-2 border-black' />
            </div></div>

          <div><div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
            <div >
              <div className=' ml-2'>
                <h6 className='text-left text-base '>Web development</h6>
                <h4 className='text-left text-3xl font-semibold'>Data Mining</h4>

                <p className='mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize '>narendra Modi </p>

              </div>
              <div className='flex justify-between mx-2 my-2'>
                <div className='flex text-sm my-auto'><FaBook className=' my-auto mr-1' />9 Lesson</div>
                <div className='flex text-sm my-auto'><IoMdTime className=' my-auto mr-1' />3hr</div>
              </div>
              <hr className='mx-2 border-black' />
            </div></div>
          <div><div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
            <div >
              <div className=' ml-2'>
                <h6 className='text-left text-base '>Web development</h6>
                <h4 className='text-left text-3xl font-semibold'>Data Mining</h4>

                <p className='mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize '>narendra Modi </p>

              </div>
              <div className='flex justify-between mx-2 my-2'>
                <div className='flex text-sm my-auto'><FaBook className=' my-auto mr-1' />9 Lesson</div>
                <div className='flex text-sm my-auto'><IoMdTime className=' my-auto mr-1' />3hr</div>
              </div>
              <hr className='mx-2 border-black' />
            </div></div>
        </div>
     
    </>
  )
}

export default Courses
