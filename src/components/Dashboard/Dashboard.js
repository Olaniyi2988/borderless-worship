import React from 'react'
import { Overview, Bulletin, Discover, Give, LiveStream, PrayerRequest, Testimonial, User } from '../component'
import SidebarComponent from "../sidebar-component/SidebarComponent";
import NavbarComponent from "../navbar-component/NavbarComponent";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        // <Router>
        <div className=" bg-body">
            <div className="flex">
                <div className="w-1/6 items-center justify-center flex bg-white">
                    <SidebarComponent />
                </div>
                <div className="w-full h-screen lg:w-5/6 px-5 py-2 box-content ">
                    <div className="flex">
                        <NavbarComponent />
                    </div>
                    <div className='mt-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
        // </Router>
    )
}

export default Dashboard

