import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='flex justify-around bg-purple-700 py-2 text-white'>
        <div><Link className='text-2xl'>Techxury</Link></div>
        <div>
            <ul className='flex gap-5 my-auto'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/courses'>Courses</NavLink></li>
                <li><NavLink>About</NavLink></li>
                <li><NavLink to='/profile'>profile</NavLink></li>
                <li className='mt-1'><button className=''><NavLink to='/login' className='text-white bg-orange-500 p-3 rounded-lg'>Login</NavLink></button></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
