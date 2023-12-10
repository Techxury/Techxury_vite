import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
     <div className='h-screen bg-yellow-200 grid place-content-center'>
                <div>
                    <NavLink className='border border-orange-600 text-white text-2xl flex bg-purple-500 '><img src="https://banner2.cleanpng.com/20171216/6c0/google-png-5a3554027e9924.3682726615134443545186.jpg" width={30} height={30} alt="" /> Sign In For Google</NavLink>
                </div>
     </div> 



    </>
  )
}

export default Login
