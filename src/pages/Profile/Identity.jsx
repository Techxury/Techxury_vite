import React from 'react'
import { Link } from 'react-router-dom'
import Profile_se from './Profile_se'




const Identity = () => {
    return (
        <>
            <div className='container mx-auto my-3 '>
                <div className='grid lg:grid-cols-3 gap-6  sm:grid-cols-1 p-3 '>
                    <div className='lg:col-span-2 sm:col-span-3 flex justify-evenly pr_bg_color' >
                        <div className='my-3'> <img src="https://images.pexels.com/photos/53364/girls-women-happy-sexy-53364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="pr_img rounded-full" alt="" srcset="" /></div>

                        <div className='my-auto'>
                            <h1 className='text-2xl pr_color'>Error@8207</h1>
                            <h1 className='pr_color'>Userid:23456@Techxury</h1>
                            <h1  className='pr_color'>Email id:23456@Techxury</h1>
                            <h2 className='pr_badge font-bold text-center'>Learner/Badge(Level)</h2>
                            <h1 className='pr_color'>skill: XYZ Experience</h1>
                            <h1 className='pr_color'>Issue Date: 12/56/3033</h1>
                        </div>
                    </div>

                    <div className='lg:col-span-1 sm:col-span-3 pr_bg_color'>
                        <h1 className=' text-center mt-2 text-xl'>Keep Your Profile:</h1>
                        <div className='flex justify-evenly my-3'>
                            <div className='border border-black text-center rounded-lg'>
                                <input type="radio"  name='profile' />
                                <img className='mx-auto border-2 rounded-full border-black' width="60" height="66" src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-person-web-smashingstocks-glyph-smashing-stocks.png" alt="external-person-web-smashingstocks-glyph-smashing-stocks" />
                                <h2 className='text-2xl font-bold'>Public</h2>
                                <p className='text-sm text-gray-400' >anyone can see</p>
                            </div>

                            <div className='border border-black text-center  rounded-lg'>
                                <input type="radio" name='profile' />
                                <img className='mx-auto border-2 rounded-full border-black' width="60" height="66" src="https://img.icons8.com/ios-filled/50/private2.png" alt="private2"/>
                                <h2 className='text-2xl font-bold'>Private</h2>
                                <p className='text-sm text-gray-400' >Nobody can see</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <nav>
                <div className='pr_nav py-3'>
                    <ul className='flex lg:gap-3 sm:gap-1 px-1 font-bold'>
                        <li><Link to="/profile" className='  px-2'>Profile</Link></li>
                        <li><Link href="/profile/Mycourses" className='  px-2'>MyCourses</Link></li>
                        <li><Link href="/profile/Group" className='  px-2'>Groupes</Link></li>
                        <li><Link href="/profile/Seting" className='  px-2'>Setting</Link></li>
                    </ul>
                </div>
            </nav>


                <Profile_se />


          
        </>
    )
}

export default Identity
