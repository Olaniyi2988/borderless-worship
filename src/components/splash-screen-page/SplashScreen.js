import React from 'react'
import logo from '../../images/borderless-logo-blue.svg'




const SplashScreen = () => {
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center'>
      <div className="w-[10%] flex flex-col">
        <img src={logo} alt="" />
        <h1 className='font-extrabold text-[20px] text-blue-dark mt-5 text-center'>BORDERLESS <br /> WORSHIP</h1>
      </div>
    </div>
  )
}

export default SplashScreen
