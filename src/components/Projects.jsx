import React from 'react'
import proj1 from '../assets/placeholder.png'

const Projects = () => {
  return (
    <div class="py-6 max-w-[1200px] mx-auto">
      <div class='mx-auto px-10 md:px-8'> 
        <div class='mb-4 flex items-center justify-between'>
          <div class='flex flex-col gap-4'>
          
            <h3 class ="text-4xl font-semibold"> 
              My <span>Projects</span>
            </h3>
            <p class='text-gray-800'>
              There are my different projects!
            </p>

           

          </div>
          

        </div>
        <div class='grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8'>
          
          <p  class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

          <p  class="group h-48 overflow-hidden rounded-lg shadow-lg md: col-span-2 md:h-80">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

          <p class="group h-48 overflow-hidden rounded-lg shadow-lg md: col-span-2 md:h-80">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

          <p  class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

        </div>

      </div>
      
    </div>
  )
}

export default Projects
