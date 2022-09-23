import React from 'react';
import '../component-css/bg-side-img.css';
import logo from '../../images/borderless-logo-white.svg'


const ResetPassword = () => {

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
            <div className="w-[100%] md:w-[50%] flex items-center justify-center">
                <div className='w-[80%] md:w-[60%]'>
                    <h3 className='font-bold text-3xl text-blue-dark'>Reset Password</h3>

                    <hr className='my-5 text-[#D3D3D3]' />

                    <form className='flex flex-col gap-6'>
                        <span className='flex flex-col'>
                            <label className='font-bold text-base'>Password</label>
                            <input 
                                className='rounded-xl border-[2px] border-[#D3D3D3] py-1 px-2 text-lg' 
                                placeholder='Enter Email here' 
                            />
                        </span>

                        <span className='flex flex-col'>
                            <label className='font-bold text-base'>Confirm Password</label>
                            <input 
                                className='rounded-xl border-[2px] border-[#D3D3D3] py-1 px-2 text-lg' 
                                placeholder='Enter Password here'
                            />
                        </span>

                        <button className='rounded-xl bg-blue-light py-2 font-bold text-lg text-white' type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
