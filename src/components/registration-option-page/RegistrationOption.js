import React from 'react'
import '../component-css/bg-side-img.css';
import logo from '../../images/borderless-logo-blue.svg'
import { Link } from 'react-router-dom'




const RegistrationOption = () => {


    // const bgImg = {
    //     backgroundImage: `url("${regOptImg}")`,
    //     backgroundSize: "contain",
    //     backgroundRepeat: "no-repeat"
    // }



    return (

        <div className='w-[100%] h-[100vh] flex py-16 px-32'>
            <div className="reg-option-image md:w-[60%] md:block hidden">

            </div>
            <div className="w-[100%] md:w-[40%] flex items-center justify-center">
                <div className='w-[80%] md:w-[70%]'>

                    <div className="text-center md:w-[50%] m-auto">
                        <span className=' flex flex-col items-center justify-center'>
                            <img src={logo} alt="" className='justify-center' />
                            <h1 className='font-extrabold text-2xl text-blue-dark mt-10'>BORDERLESS <br /> WORSHIP</h1>
                        </span>
                    </div>



                    <form className='flex flex-col gap-6 mt-16'>
                        <Link to='/create-account'>
                            <button className='w-full rounded-xl bg-blue-light py-2 font-bold text-lg text-white' type="submit">Sign Up</button>
                        </Link>

                        <Link to='/login'>
                            <button className='w-full rounded-xl border-[3px] py-2 font-bold text-lg text-blue-light' type="submit">Log In</button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default RegistrationOption