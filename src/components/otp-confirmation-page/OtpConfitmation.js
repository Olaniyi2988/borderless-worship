
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
          <h3 className='font-bold text-3xl text-blue-dark'>Verification Code</h3>
          
          <p className='text-base my-5'>Check your email for a four digit confirmation code to verify and complete your sign up</p>

          <form className='flex flex-col gap-5'>
            <span className='space-x-5'>
            <input className='w-[50px] rounded-md border-[2px] border-blue-light py-1 px-2 text-lg' type="text" />
            <input className='w-[50px] rounded-md border-[2px] border-blue-light py-1 px-2 text-lg' type="text" />
            <input className='w-[50px] rounded-md border-[2px] border-blue-light py-1 px-2 text-lg' type="text" />
            <input className='w-[50px] rounded-md border-[2px] border-blue-light py-1 px-2 text-lg' type="text" />
            </span>

            <span className=''>
                <button className='rounded-xl bg-blue-light py-2 font-bold text-lg text-white' type="submit">Verify</button>
                <button className='rounded-xl bg-white border-[2px] border-blue-light py-2 font-bold text-lg text-blue-light' 
                type="submit">Resend Code</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OtpConfitmation
