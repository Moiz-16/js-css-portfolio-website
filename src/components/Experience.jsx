import React from 'react'
import proj1 from '../assets/placeholder.png'
import proj2 from '../assets/placeholder2.png'

const Experience = () => {
  return (
    <div class="py-6 max-w-[1200px] mx-auto">
      <div class='mx-auto px-10 md:px-8'> 
        <div class='mb-4 flex items-center justify-between'>
          <div class='flex flex-col gap-4'>
          
            <h3 class ="text-4xl font-semibold"> 
              My <span>Experience</span>
            </h3>
        
           

          </div>
          

        </div>
        <div class=' grid gap-4 grid-cols-1 sm:grid-cols-3 md:gap-6 xl:gap-8'>
          
          <p  class="group  overflow-hidden rounded-lg shadow-lg md:h-80">
            <img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

          <p  class="group overflow-hidden rounded-lg shadow-lg  md:h-80">
            <img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

          <p class="group  overflow-hidden rounded-lg shadow-lg  md:h-80">
            <img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"/>

          </p>

        
        

        </div>

      </div>
      
    </div>
  )
}

export default Experience
