import React, { useEffect } from 'react';
import CLOUDS from 'vanta/src/vanta.clouds'
import FOG from 'vanta/src/vanta.fog'
const Cr_heading = () => {


  useEffect(() => {
    FOG({
      el: '#vanta_bg',
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
      <div id='vanta_bg' className='cr_head_design flex justify-center place-content-center   -z-10 h-screen'>
        <div className='cr_head_text border mx-auto my-auto'>
          <h1 className='text-3xl font-bold text-center'>Online Courses</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum nulla perferendis veniam sit id nam cumque quae pariatur odio.</p>
        </div>
      </div>
    </>
  )
}

export default Cr_heading
