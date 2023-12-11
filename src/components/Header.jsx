import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";


const Header = () => {
  const [ProfileDisplay, setProfileDisplay] = useState(false)
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth)
  const navbar_showing = () => {
    setProfileDisplay(!ProfileDisplay)

  }

  useEffect(() => {
    const changeWidth = ()=>{
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
  
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  
  return (
    <>
    {(ProfileDisplay || ScreenWidth > 1023) && (<div className='hd_back_blur'></div>
    )}
      <nav className='flex lg:justify-around sm:justify-between  py-2 text-white bg-black'>
        <div className='flex place-items-center lg:ml-0 sm:ml-3'><Link className='text-2xl flex'><img src="img/final.webp" width={30} height={30} alt="" srcset="" className='mr-2' />Techxury</Link></div>
        <div>
          {(ProfileDisplay || ScreenWidth > 1023) && (
            <ul className=' gap-5 my-auto' id='head_links'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li className='mt-1'><button className=''><NavLink to='/login' className='text-white bg-orange-500 p-3 rounded-lg'>Login</NavLink></button></li>
            <li className='flex place-items-center'>
            <img src="img/final.webp" width={30} height={30} className=' rounded-full mr-1' alt="" srcset="" />
              <h5>Error 404</h5>
              <span   id='login_arrow' className='ml-1 cursor-pointer text-xl' ><IoIosArrowDown /></span>
              {/* <ul className='flex flex-col absolute top-12 right-20 bg-slate-500 p-2'>
                <li><NavLink to='/profile'>My Profie</NavLink></li>
                <li><NavLink>Logout</NavLink></li>
              </ul> */}
            </li>

              {/* dropdown menu peofile section  */}
            {/* <div className=' p-3 text-white'>
              <ul className='flex flex-col'>
                <li><NavLink to='/profile'>My Profie</NavLink></li>
                <li><NavLink>Logout</NavLink></li>
              </ul>
            </div> */}

          </ul>)}

          <button onClick={navbar_showing} className='nav_btn_mobile'><IoReorderThree /></button>
        </div>
      </nav>
    </>
  )
}

export default Header
