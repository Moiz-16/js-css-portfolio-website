import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  
    return (
    <div className='z-10 bg-white text-gray-900 flex justify-between items-center max-w-[1240px] max-auto h-24 px-4 text-l'>

        <h1 className='text-3xl  font-bold primary-color ml-4'>BOID</h1>
        <u1 className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Education</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Contact</li>
        </u1>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'bg-white text-gray-900 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-100  ease-in-out duraion-500' 
                                : 'fixed left-[-100%]'}>
            <h1 className='text-3xl primary-color m-4'>BOID</h1>
            <u1 className='p-8 text-2xl'>
                <li className='p-2'>Home</li>
                <li className='p-2'>About</li>
                <li className='p-2'>Education</li>
                <li className='p-2'>Projects</li>
                <li className='p-2'>Contact</li>
            </u1>

        </div>

    </div>
  )
}

export default Navbar
