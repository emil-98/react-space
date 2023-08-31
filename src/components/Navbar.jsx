import React, {useState} from 'react'
import {MdMenu, MdClose} from 'react-icons/md'
import {IoMdGlobe, IoMdInformationCircleOutline} from 'react-icons/io'
import { IoCog} from 'react-icons/io5'

const Navbar = () => {

  const [nav, toggleNav] = useState(false);
  const handleMenuClick = () => toggleNav(!nav)

  return (
    <div
      name="navbar"
      className='relative top-0 flex w-full h-fit backdrop-blur-lg bg-slate-800 bg-opacity-60 justify-center sm:justify-between z-10'
    > 
      <h1 className='text-5xl sm:text-4xl p-4 text-gray-300'>What's Up?</h1>
      <div
        className='absolute sm:hidden h-10 w-10 start-4 self-center text-gray-400 z-50'
        onClick={handleMenuClick}
      >
        {!nav ?  <MdMenu className='h-full w-full'/>: <MdClose className='h-full w-full'/>}
      </div>


      {/* Desktop */}

      <ul className='text-gray-400 hidden sm:flex px-4 self-center w-2/12 justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Settings</li>
      </ul>


      {/* Mobile */}

      <ul className={`overflow-hidden transition-all text-2xl text-gray-300 absolute z-40 top-0 start-0 h-screen bg-slate-600 bg-opacity-70 backdrop-blur-lg flex flex-col space-y-6 items-end ${!nav ? 'w-0 p-0 text-transparent' : 'w-5/6 p-6'}`}>
        <li className='flex items-center'>Home <IoMdGlobe /></li>
        <li className='flex items-center'>About <IoMdInformationCircleOutline /></li>
        <li className='flex items-center'>Settings <IoCog /></li>
      </ul>
    </div>
  )
}

export default Navbar