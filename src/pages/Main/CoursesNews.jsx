import React, { useEffect } from 'react'
import './Mainstyling.css'
import { Link } from 'react-router-dom'
import { CiClock2 } from "react-icons/ci";
import FOG from 'vanta/src/vanta.fog'

const Courses = () => {

    
//   useEffect(() => {
//     FOG({
//       el: '#vanta_bg',
//       mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   highlightColor: 0x0,
//   midtoneColor: 0x6adbff,
//   lowlightColor: 0xd1d1d1,
//   baseColor: 0xe0e0e0
//     })
//   }, [])

    return (
        <>
           <div id='vanta_bg2'>

           <div className='container mx-auto my-3'>
                <h5 className='h124'>Top Categories</h5>

                <div className='grid lg:grid-cols-4 px-auto sm:grid-cols-1'>
                    <div className='lg:col-span-3 flex justify-between flex-wrap sm:mx-auto'>
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
           </div>
        </>
    )
}

export default Courses
