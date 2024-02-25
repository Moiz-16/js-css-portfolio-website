import React from 'react'
import emailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'

// import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div>
        <div className='sm:h-svh  h-screen mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        
        <div className='flex flex-col justify-center items-center'> 
            <p className='md:text-7xl sm:text-4xl text-3xl font-bold text-black'>Hi! I am Moiz Saleem</p>
            <h1 className='md:text-9xl sm:text-6xl text-5xl font-bold md:py-6'>
            <TypeAnimation
                sequence={[
                    "Student",
                    1500,
                    "Developer",
                    1500,
                    "Entrepreneur",
                    1500,
                ]}
                wrapper="span"
                speed={65}
                repeat={Infinity}
            />
            </h1>
            {/* <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-700'>with 5 years experience</p>
            </div> */}
            <div className='"text-5xl flex justify-start gap-16 my-7 text-purple-600'> 
                
                <a href="https://github.com/">
                    <img
                        src={githubIcon}
                        alt = "My GitHub Profile"
                        className=" h-12"
                    />
                </a>
                
                <a href="https://www.linkedin.com/">
                    <img
                        src={linkedinIcon}
                        alt = "My LinkedIn profile"
                        className=" h-12 "
                    />
                </a>
                <a href="https://github.com/">
                    <img
                        src={emailIcon}
                        alt = "My email"
                        className=" h-12"
                    />
                </a>

                

            </div>
            

        </div>

        
       

        {/* <div className='my-auto'>
            <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={profilepic} alt="profile pic" />
        </div> */}

        </div>
      
    </div>
  )
}

export default Hero
