import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>

    <div className=' mx-auto text-center gradient_background ' >
    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='my-3'>
            <h1 className='flex justify-center'><Link to="/" className='flex text-2xl pur_color'><img src="./img/final.webp" width={50} alt="" /><span className='pt-3'>Techxury</span></Link></h1>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere provident eius accusantium, aspernatur vero fuga!</p>
            <span className='flex gap-2 justify-center mt-10'>
                <span><a target='target' href='https://github.com/Techxury/Techxury-full-website'><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a></span>
                <span><a target='target' href='https://github.com/Techxury/Techxury-full-website'><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a></span>
                <span><a target='target' href='https://github.com/Techxury/Techxury-full-website'><img width="48" height="48" src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1"/></a></span>
            </span>
        </div>

        
        <div className='my-3'>
        <h1 className='ft_right_hd text-3xl text-bold'>UseLink</h1>
            <ul className='grid gap-2 text-xl'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/">Doubt</NavLink></li>
                <li><NavLink to="#">Groups</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </div>
    </div>

    <div className='container_fluid'>
            <p><span className='text-2xl'>&#169;</span> All Copyright Reserverd <Link to="/" className='text-white'>WWWW.Techxury.com</Link></p>
    </div>
    </div>
      
    </>
  )
}

export default Footer
