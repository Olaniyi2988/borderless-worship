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

                <div className='w-[100%] flex flex-col  justify-center'>
                    <ul className='flex flex-col space-y-1'>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-house"></i></span> Home</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-user"></i></span> Users</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-comments"></i></span> Testimonial</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-person-praying"></i></span> Prayer Request</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-book-bible"></i></span> Bulletin</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-magnifying-glass"></i></span> Discover</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-circle-play"></i></span> Livestream</a>
                        </li>
                        <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                            <a href="/"><span className='mr-3'><ion-icon name="home"></ion-icon></span> Give</a>
                        </li>
                    </ul>

                </div>

                <div className='w-[100%] flex flex-col justify-center mt-52'>
                    <div className='flex flex-col'>
                        <p className='py-1 px-5 text-lg rounded-full text-red  '>
                            <a href="/"><span className='mr-3'><i class="fa-solid fa-right-from-bracket"></i></span> Logout</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent
