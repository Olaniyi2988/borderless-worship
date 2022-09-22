import React from 'react'

const NavbarComponent = () => {
  return (
    <div className='w-[100%] flex justify-between'>
      <div className='cursor-pointer'>
        <i class="fa-solid fa-bars text-3xl"></i>
      </div>

      <div className='flex space-x-5 drop-shadow-xl py-3 px-7 rounded-full bg-white box-border float-left'>
        <i className="fa-solid fa-bell text-xl"></i>
        <div className='flex space-x-2 mx-auto'>
          <i className="fa-solid fa-circle-user text-xl"></i>
          <p>Mr Ibitoye</p>
          <i className="fa-solid fa-caret-down text-xl"></i>
        </div>
      </div>

    </div>
  )
}

export default NavbarComponent
