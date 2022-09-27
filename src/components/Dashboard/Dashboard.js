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
                <div className="w-1/6 bg-white lg:block hidden">
                    <SidebarComponent />
                </div>
                <div className="w-full lg:w-5/6 px-10 py-5">
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

