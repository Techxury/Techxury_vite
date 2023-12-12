import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";


const Header = () => {
  const [ProfileDisplay, setProfileDisplay] = useState(false)
  const [Profile_setting, setProfile_setting] = useState(false)
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth)
  const navbar_showing = () => {
    setProfileDisplay(!ProfileDisplay)

  }
  const profile_showing = ()=>{
    setProfile_setting(!Profile_setting)
  }

  useEffect(() => {
    const changeWidth = () => {
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
      <nav className='flex lg:justify-around sm:justify-between  py-2 gradient_background '>
        <div className='flex place-items-center lg:ml-0 sm:ml-3'><Link className='text-2xl flex'><img src="img/final.webp" width={30} height={30} alt="" srcset="" className='mr-2' />Techxury</Link></div>
        <div>
          {(ProfileDisplay || ScreenWidth > 1023) && (
            <ul className=' gap-5 my-auto' id='head_links'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/courses'>Courses</NavLink></li>
              <li><NavLink>About</NavLink></li>
              <li><NavLink to='/profile'>Profile</NavLink></li>
              <li className='mt-1'><button className=''><NavLink to='/login' className='text-white bg-orange-500 p-3 rounded-lg'>Login</NavLink></button></li>

              <div>
                <li className='flex place-items-center'  onClick={profile_showing}>

                  <img src="img/final.webp" width={30} height={30} className=' rounded-full mr-1' alt="" srcset="" />
                  <h5>Error 404</h5>
                  <span id='login_arrow' className='ml-1 cursor-pointer text-xl mt-1' ><IoIosArrowDown /></span>


                </li>
                {Profile_setting  && (<li><div className='lg:border border-black px-3 lg:text-black mt-2 lg:bg-gray-200 sm:text-white font-medium' >
                  <ul className='flex flex-col'>
                    <li><NavLink to='/profile'>My Profie</NavLink></li>
                    <li><NavLink>Logout</NavLink></li>
                  </ul>
                </div></li>)}
              </div>

              {/* dropdown menu peofile section  */}


            </ul>)}

          <button onClick={navbar_showing} className='nav_btn_mobile'><IoReorderThree /></button>
        </div>
      </nav>
    </>
  )
}

export default Header
