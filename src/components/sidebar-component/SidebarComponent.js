import React from 'react'
import logo from '../../images/borderless-logo-blue.svg'


const SidebarComponent = () => {
    return (
        <div className='md:w-[15%] h-[100vh] p-5 fixed bg-white md:block hidden'>
            <div className=" m-auto flex flex-col">
                <div className='w-[100%] flex flex-col items-center justify-center'>
                    <img src={logo} alt="" className='w-20' />
                    <h1 className='font-extrabold text-[15px] text-blue-dark mt-5 text-center'>BORDERLESS <br /> WORSHIP</h1>
                    <hr className='my-5 border-t-[1px] w-full text-[#D3D3D3]' />
                </div>


                <div>
                    <ul className='flex flex-col space-y-1'>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="home"></ion-icon></span> Home</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="person"></ion-icon></span> Users</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="home"></ion-icon></span> Testimonial</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="home"></ion-icon></span> Prayer Request</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="home"></ion-icon></span> Bulletin</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="search"></ion-icon></span> Discover</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="play-circle"></ion-icon></span> Livestream</a>
                        </li>
                        <li className='py-2 px-5 text-base rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-5'><ion-icon name="home"></ion-icon></span> Give</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent
