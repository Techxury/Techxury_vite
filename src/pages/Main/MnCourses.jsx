// import React from 'react'
import './Mainstyling.css'
import CoursesNews from './CoursesNews';
import React, { useRef, useState } from 'react';
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

const Courses = () => {
    return (
        <>
            <CoursesNews />


            <div className='container mx-auto my-3'>
                <h1 className='text-white text-2xl font-semibold flex'>Famous courses <FaArrowRightLong className='my-auto ml-2 '/> </h1>

                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={8}
                        pagination={{
                            clickable: true,
                        }}
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
                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='mn_cr_data rounded-2xl overflow-hidden'>
                            <Link to="/profile">
                                <div><img src="./img/cr2.webp" className='w-full h-40 rounded-b-2xl' alt="" srcset="" /></div>
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
                                </div>
                            </Link>
                        </SwiperSlide>


                        
                        
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Courses
