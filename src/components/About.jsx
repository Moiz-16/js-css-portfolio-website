import React from 'react'
import fillerImg from '../assets/codingstockpic.jpg'

const About = () => {
  return (
    <div className='py-10 text-black bg-gray-400 h-auto'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='w-[400px] h-full'>
                    <img
                        src={fillerImg}
                        alt = ""
                        className="object-cover rounded-x1 h-[300] filter grayscale brightness-50"
                    />

                </div>


            </div>

            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About<span className='primary-text'>Me</span></h3>
                        <p className='tet-justify leading-7 w-11/12 mx-auto'>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            
                            

                        </p>

                    </div>

                </div>
                <div className='flex mt-10 items-center gap-7'>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-black'>11
                            <span className='primary-text'>+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>Projects</span></p>

                    </div>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-black'>11
                            <span className='primary-text'>+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>Projects</span></p>

                    </div>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-black'>11
                            <span className='primary-text'>+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>Projects</span></p>

                    </div>

                </div>
            </div>




        </div>
    </div>
  )
}

export default About
