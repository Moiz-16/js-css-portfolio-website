import React from 'react'

const Education = () => {
  return (
    <div className=' bg-[#ffffff] pt-4'>
        
        <h2 className='mb-8 m  text-4xl font-semibold text-black text-center'>My <span>Education</span></h2>
        <div class="mb-[20px]  text-black bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p className='font-semibold'>University of Bristol</p>
            <p className='text-black'>(Sep 2023 - present)</p>
            <p className='text-black'>
                BSc Mathematics and Computer Science
            </p>
            <p className='text-black'>
                Year 1 Modules:
                Imperative and Functional Programming
                Object-Oriented Programming and Algorithms I
                Probability and Statistics
                Linear Algebra
                Analysis
                Introduction to Proofs and Group Theory
            </p>

        </div>

        <div class="h-[50px] w-[2px] bg-slate-300 my-1 mx-auto"></div>

        <div class="mb-[20px] text-black bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>North Bristol Post-16 Centre</p>
            <p className='text-black'>(Sep 2020 - Jun 2022)</p>
            <p className='text-black'>
                A Levels: Mathematics(A*), Physics(A*), Economics(A), Further Mathematics(A).
            </p>

        </div>

        <div class="h-[50px] w-[2px] bg-black my-1 mx-auto"></div>

        <div class="mb-[20px] text-black bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>Bristol Metropolitan Academy</p>
            <p className='text-black'>(Sep 2015 - Jun 2020)</p>
            <p className='text-black'>
            GCSEs: 10 GCSEs at Grade 9(A*), including Mathematics, English Literature and Further Mathematics.
            </p>

        </div>

        <div class="h-[50px] w-[2px] bg-slate-300 my-1 mx-auto"></div>
      
      

      
    </div>
  )
}

export default Education
