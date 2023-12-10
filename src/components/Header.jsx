import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  // const [ProfileDisplay, setProfileDisplay] = useState(false)

  // const pr_dis = () => {
  //   setProfileDisplay(true)

  // }
  return (
    <>
      <nav className='flex justify-around bg-purple-700 py-2 text-white'>
        <div className='flex place-items-center'><Link className='text-2xl flex'><img src="img/final.webp" width={30} height={30} alt="" srcset="" className='mr-2' />Techxury</Link></div>
        <div>
          <ul className='flex gap-5 my-auto place-items-center'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink to='/profile'>profile</NavLink></li>
            {/* <li className='mt-1'><button className=''><NavLink to='/login' className='text-white bg-orange-500 p-3 rounded-lg'>Login</NavLink></button></li> */}
            <li className='flex place-items-center'><img src="img/final.webp" width={30} height={30} className=' rounded-full mr-1' alt="" srcset="" />
              <h5>Error 404</h5>
              <span id='login_arrow' className='ml-1 cursor-pointer text-xl' ><IoIosArrowDown /></span>
            </li>
            
            <div className='header_ac_profile relative p-3 text-white'>
              <ul className='flex flex-col'>
                <li><NavLink to='/profile'>My Profie</NavLink></li>

                <li><NavLink>Logout</NavLink></li>
              </ul>
            </div>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Header
