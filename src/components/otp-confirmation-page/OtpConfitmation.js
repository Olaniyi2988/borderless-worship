
import React from 'react';
import '../component-css/bg-side-img.css';
import logo from '../../images/borderless-logo.svg'




const OtpConfitmation = () => {
  return (
    <div className='w-[100%] h-[100vh] flex'>

      <div className="md:w-[50%] md:block hidden">
        <div className="bg-image text-center">
          <span>
            <img src={logo} alt="" />
            <h1 className='font-extrabold text-4xl text-white mt-10'>BORDERLESS <br /> WORSHIP</h1>
          </span>
        </div>
      </div>

      <div className="w-[100%] md:w-[50%] flex items-center justify-center text-center">
        <div className='w-[80%] md:w-[60%]'>
          <h3 className='font-bold text-3xl text-blue-dark'>Create an Account</h3>
          
          <form className='flex flex-col gap-4'>
            <span className='flex flex-col'>
            <label htmlFor="" className='font-bold text-base'>First Name</label>
            <input className='rounded-xl border-[2px] py-1 px-2 text-lg' type="text" name="Fname" placeholder='Enter First Name here' />
            </span>

            <span className='flex flex-col'>
            <label htmlFor="" className='font-bold text-base'>Last Name</label>
            <input className='rounded-xl border-[2px] py-1 px-2 text-lg' type="text" name="Lname" placeholder='Enter Last Name here' />
            </span>

            <span className='flex flex-col'>
            <label htmlFor="" className='font-bold text-base'>Email Address</label>
            <input className='rounded-xl border-[2px] py-1 px-2 text-lg' type="email" name="Email" placeholder='Enter Email here' />
            </span>

            <span className='flex flex-col'>
            <label htmlFor="" className='font-bold text-base'>Password</label>
            <input className='rounded-xl border-[2px] py-1 px-2 text-lg' type="password" name="Password" placeholder='Enter Password here' />
            </span>

            <span className='flex flex-col'>
            <label htmlFor="" className='font-bold text-base'>Confirm Password</label>
            <input className='rounded-xl border-[2px] py-1 px-2 text-lg' type="password" name="Password" placeholder='Enter Password here' />
            </span>

            <button className='rounded-xl bg-blue-light py-2 font-bold text-lg text-white' type="submit">Sign Up</button>

            <p className='text-center'>Have an account already? <span className='ml-4 text-blue-light cursor-pointer' href='/'>LOG IN</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OtpConfitmation
