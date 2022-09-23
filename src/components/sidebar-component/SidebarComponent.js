import React from 'react'
import logo from '../../images/borderless-logo-blue.svg'
import { Link } from 'react-router-dom'
import { PrayerRequest } from '../component'


const SidebarComponent = () => {
    return (
        // <div>
        //     <h1>side bar</h1>
        // </div>

        <div className='w-full p-5 bg-white md:block hidden '>
            <div className=" m-auto flex flex-col">
                <div className=' flex flex-col items-center justify-center'>
                    <img src={logo} alt="" className='w-20' />
                    <h1 className='font-extrabold text-[15px] text-blue-dark mt-5 text-center'>BORDERLESS <br /> WORSHIP</h1>
                    <hr className='my-5 border-t-[1px] w-full text-[#D3D3D3]' />
                </div>

                <div className=' flex flex-col  justify-center'>
                    <ul className='flex flex-col space-y-1'>
                        <Link to='/'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-house"></i></span> Overview
                            </li>
                        </Link>
                        <Link to='/user'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-user"></i></span> Users
                            </li>
                        </Link>
                        <Link to='/testimonial'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-comments"></i></span> Testimonial
                            </li>
                        </Link>
                        <Link to='/prayer-request'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-person-praying"></i></span> Prayer Request
                            </li>
                        </Link>
                        <Link to='/bulletin'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-book-bible"></i></span> Bulletin
                            </li>
                        </Link>
                        <Link to='/discover'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-magnifying-glass"></i></span> Discover
                            </li>
                        </Link>
                        <Link to='/live-stream'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><i className="fa-solid fa-circle-play"></i></span> Livestream
                            </li>
                        </Link>
                        <Link to='/give'>
                            <li className='py-1 px-5 text-lg rounded-full text-blue-dark hover:bg-blue-dark hover:text-white'>
                                <span className='mr-3'><ion-icon name="home"></ion-icon></span> Give
                            </li>
                        </Link>

                    </ul>

                </div>

                <div className=' flex flex-col justify-center mt-44'>
                    <div className='flex flex-col'>
                        <p className='py-1 px-5 text-lg rounded-full text-red'>
                            <span className='mr-3'><i class="fa-solid fa-right-from-bracket"></i></span> Logout
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent
