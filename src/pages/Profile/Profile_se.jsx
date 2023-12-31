import React from 'react'

const Profile_se = () => {
  return (
    <>

      {/* profile personal Information section  */}
      <div className='container mx-auto my-3'>

        <div className='my-2'>
          <h1 className='pr_color text-3xl font-semibold'>Personal Information:</h1>
        </div>

        <div className='pr_main_con grid lg:grid-cols-2 sm:grid-cols-2'>
          <div className='flex flex-col gap-5 ml-3 my-3'>
            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Name:</h2>
              <input className='pr_infor_input' type="text" />
            </div>
            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Loacation:</h2>
              <input className='pr_infor_input' type="text" />
            </div>
            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Current job Title (if applicable):</h2>
              <input className='pr_infor_input' type="text" />
            </div>
          </div>

          <div className='flex flex-col gap-5 ml-3 my-3'>

            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Gender:</h2>
              <select name="gender" id="gender" className='pr_infor_input'>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>

            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Phone Number:</h2>
              <input className='pr_infor_input' type="number" />
            </div>

            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Interests and Hobbies:</h2>
              <input className='pr_infor_input' type="text" />
            </div>

          </div>
        </div>
      </div>



      {/* profile Education input section */}
      <div className='container mx-auto my-3'>

        <div className='my-2'>
          <h1 className='pr_color text-3xl font-semibold lg_color_wt'>Education:</h1>
        </div>

        <div className='pr_main_con grid lg:grid-cols-2 sm:grid-cols-2'>
          <div className='flex flex-col gap-5 ml-3 my-3'>
            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Highest Level of Education:</h2>
              <input className='pr_infor_input' type="text" />
            </div>
            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Certification</h2>
              <input className='pr_infor_input' type="file" />
            </div>
            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Year of Graduation:</h2>
              <input className='pr_infor_input' type="text" />
            </div>
          </div>

          <div className='flex flex-col gap-5 ml-3 my-3'>


            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Institution/University Name:</h2>
              <input className='pr_infor_input' type="text" />
            </div>

            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Field of Study or Major:</h2>
              <input className='pr_infor_input' type="text" />
            </div>

            <div>
              <h2 className='text-lg font-semibold lg_color_wt'>Other Information:</h2>
              <input className='pr_infor_input' type="text" />
            </div>

          </div>
        </div>
      </div>




      <div className='pr_main_con container mx-auto my-3 px-4'>
        <div className='mb-4'>
          <h1 className='pr_color text-3xl font-bold'>Experience:</h1>
        </div>
        <div className='my-3'>
          <h1 className='pr_color text-2xl font-semibold my-1'>project:</h1>
          
          <div className='grid lg:grid-col-4 '>

          <div className='my-2 lg:col-span-3 sm:col-span-1'>
            <p className='pr_ex_text'>
              Highlight your capabilities to potential employers by presenting job specific projects Showcase your technical powers and problem solving ablities through the inclusion of relevant projects that demonstrate real world solutions
            </p>
          </div>
          {/* <div className='my-2 text-center lg:col-span-1'>
            <input className='pr_infor_input' type='file' />
          </div> */}

          </div>

        </div>

        <div className='my-3'>
          <h1 className='pr_color text-2xl font-semibold my-1'>Work Experience:</h1>
          

          <div className='grid lg:grid-col-4'>
          <div className='my-2 lg:col-span-3  '>
            <p className='pr_ex_text'>
              Provide details of your professional journey by listing your previous employment. if you're at the beginning of your carrer. consider including internship or volunteer roles
            </p>
          </div>
          {/* <div className='my-2 text-center lg:col-span-3 '>
             <input className='pr_infor_input' type='file' />
             </div> */}
          </div>
        </div>
      </div>






    </>
  )
}

export default Profile_se