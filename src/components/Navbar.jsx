import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  
    return (
    <div className='z-10 text-black flex justify-between items-center max-w-[1240px] mx-auto h-24 px-6 text-l'>

        <h1 className='list-nonefont text-3xl font-bold primary-color ml-4'>moizsaleem.io</h1>
        <u1 className='hidden md:flex list-none font-bold'>
            <li className='p-4 transition duration-300 ease-in-out hover:text-blue-400'>Home</li>
            <li className='p-4 transition duration-300 ease-in-out hover:text-blue-400'>About</li>
            <li className='p-4 transition duration-300 ease-in-out hover:text-blue-400'>Projects</li>
            <li className='p-4 transition duration-300 ease-in-out hover:text-blue-400'>Experience</li>
            <li className='p-4 transition duration-300 ease-in-out hover:text-blue-400'>Contact</li>
        </u1>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'bg-white black fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-200  ease-in-out duration-500' 
                                : 'fixed left-[-100%]'}>
            <h1 className='list-nonefont text-3xl font-bold primary-color m-4'>moizsaleem.io</h1>
            <u1 className='p-8 text-2xl list-none font-bold '>
                <li className='p-2 transition duration-300 ease-in-out hover:text-blue-400'>Home</li>
                <li className='p-2 transition duration-300 ease-in-out hover:text-blue-400'>About</li>
                <li className='p-2 transition duration-300 ease-in-out hover:text-blue-400'>Projects</li>
                <li className='p-2 transition duration-300 ease-in-out hover:text-blue-400'>Experience</li>
                <li className='p-2 transition duration-300 ease-in-out hover:text-blue-400'>Contact</li>
            </u1>

        </div>

    </div>
  )
}

export default Navbar
