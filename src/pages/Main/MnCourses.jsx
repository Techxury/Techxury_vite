// import React from 'react'
import './Mainstyling.css'
import CoursesNews from './CoursesNews';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import FOG from 'vanta/src/vanta.fog'
const Courses = () => {
    return (
        <>
            {/* <CoursesNews /> */}


            <div id='vanta_bg2' className='-z-0'>

                <div className='container mx-auto'>
                    <h5 className='h124'>Top Categories</h5>

                    <div className='grid lg:grid-cols-4 px-auto sm:grid-cols-1'>
                        <div className='lg:col-span-3 flex justify-between flex-wrap sm:mx-auto'>
                            <div className='mx-auto px-2'>
                                <div className='flex my-2'>
                                    <img src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='Cr_pic mr-3 rounded' alt="" srcset="" />
                                    <div>
                                        <h2 className='cr_txt_hd -z-0'>Web Devlopment</h2>
                                        <p className='cr_txt_para text-sm -z-0'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <img src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='Cr_pic mr-3 rounded' alt="" srcset="" />
                                    <div>
                                        <h2 className='cr_txt_hd'>Web Devlopment</h2>
                                        <p className='cr_txt_para text-sm'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>



                            <div className=' mx-auto px-2'>
                                <div className='flex my-2'>
                                    <img src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='Cr_pic mr-3 rounded' alt="" srcset="" />
                                    <div>
                                        <h2 className='cr_txt_hd'>Web Devlopment</h2>
                                        <p className='cr_txt_para text-sm'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <img src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='Cr_pic mr-3 rounded' alt="" srcset="" />
                                    <div>
                                        <h2 className='cr_txt_hd'>Web Devlopment</h2>
                                        <p className='cr_txt_para text-sm'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mx-auto px-2'>
                                <div className='flex my-2'>
                                    <img src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='Cr_pic mr-3 rounded' alt="" srcset="" />
                                    <div>
                                        <h2 className='cr_txt_hd'>Web Devlopment</h2>
                                        <p className='cr_txt_para text-sm'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <img src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='Cr_pic mr-3 rounded' alt="" srcset="" />
                                    <div>
                                        <h2 className='cr_txt_hd'>Web Devlopment</h2>
                                        <p className='cr_txt_para text-sm'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:col-span-1 '><img src="https://images.pexels.com/photos/19583366/pexels-photo-19583366/free-photo-of-parrot-with-red-feathers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='h-40 w-60 mx-auto' alt="" srcset="" /></div>
                    </div>
                </div>


                <div className='container mx-auto py-3'>
                    <h1 className='text-white text-2xl font-semibold flex'>Famous courses <FaArrowRightLong className='my-auto ml-2 ' /> </h1>

                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={8}

                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide>



                            <SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide><SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide><SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide><SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide><SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide><SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide><SwiperSlide className='mn_cr_data overflow-hidden cursor-pointer'>
                                <Link to="/profile">
                                    <div className='cr_mn_img'><img src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cr_mn_img ' alt="" srcset="" /></div>
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
                                    </div>
                                </Link>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses
