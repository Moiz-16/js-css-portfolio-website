import React from 'react'
import profilepic from '../assets/codingstockpic.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div>
        <div className='my-7 sm:my-0 bg-white max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        
        <div className='flex-col my-auto mx-auto'> 
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-black'>Hi! I am Moiz Saleem</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
                sequence={[
                    "Student",
                    1000,
                    "Developer",
                    1000,
                    "Innovator",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-700'>with 5 years experience</p>
            </div>
            <div className='"text-5xl flex justify-start gap-16 my-7 text-purple-600'> 
                <AiFillLinkedin/>
                <AiFillGithub/>
                <AiFillMail/>

            </div>
            

        </div>

        
       

        <div className='my-auto'>
            <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={profilepic} alt="profile pic" />
        </div>

        </div>
      
    </div>
  )
}

export default Hero
