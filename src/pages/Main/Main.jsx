import React, { useEffect } from 'react'
import MnCourses from './MnCourses'
import Careousel from './Careousel'
// import Header from '../../components/Header'
import FOG from 'vanta/src/vanta.fog'
const Main = () => {

    useEffect(() => {
        FOG({
            el: '#vanta_bg3',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x0,
            midtoneColor: 0x6adbff,
            lowlightColor: 0xd1d1d1,
            baseColor: 0xe0e0e0
        })
    }, [])


    useEffect(() => {
        FOG({
            el: '#vanta_bg4',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x0,
            midtoneColor: 0x6adbff,
            lowlightColor: 0xd1d1d1,
            baseColor: 0xe0e0e0
        })
    }, [])

    return (
        <>
            {/* <Careousel /> */}
            <MnCourses />
            <div id='vanta_bg3'>
                <div className="container mx-auto">
                    <div className="lg:columns-2  sm:columns-1" >
                        <div className=" flex align-middle my-3">
                            <img className='mx-auto' src="./img/con1.webp" width={500} alt="" srcset="" />
                        </div>

                        <div className=" pt-12 text-center">
                            <h2 className='main_con_title'>Unleash the Power of
                                Collaboration</h2>
                            <p className='main_con_para'>Elevate your learning experience with our innovative collaboration feature. Connect seamlessly with peers, exchange ideas effortlessly. Our platform fosters a supportive learning community, allowing you to engage in group, share insights, and enhance your skills collectively. Say goodbye to learning alone—embrace the power of collaboration on your educational journey</p>
                        </div>
                    </div>
                </div>

                <div className="container  mx-auto">
                    <div className="lg:columns-2  sm:columns-1" >


                        <div className="  pt-12 text-center">
                            <h2 className='main_con_title'>Multi Level
                                Doubt Solution</h2>
                            <p className='main_con_para '>"Navigate learning hurdles effortlessly with our Multi-Level Doubt Solution. From instant quiz assistance to group discussions and direct queries to course creators, we've got you covered at every step. No more struggling alone—get clear, concise answers in a variety of ways. Embrace the simplicity of our doubt solution feature, making your learning journey smoother and more enjoyable."</p>                        </div>

                        <div className="flex align-middle my-3">
                            <img className='mx-auto' src="./img/con2.webp" width={500} alt="" srcset="" />
                        </div>
                    </div>
                </div>

</div>
<div id='vanta_bg4'>

                <div className="container py-3 mx-auto">
                    <div className="lg:columns-2  sm:columns-1" >
                        <div className="flex align-middle my-3">
                            <img className='mx-auto' src="./img/con3.webp" width={500} alt="" srcset="" />
                        </div>

                        <div className="   pt-12 text-center">
                            <h2 className='main_con_title'>Join Us Today !</h2>
                            <p className='main_con_para'>"Embark on a transformative learning journey with TECHXURY today. Elevate your skills, collaborate with peers, and unlock a world of opportunities. Join our dynamic community to access cutting-edge courses, engage in collaborative projects, and empower yourself for success in the ever-evolving tech landscape. Your future begins with TECHXURY."</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main
