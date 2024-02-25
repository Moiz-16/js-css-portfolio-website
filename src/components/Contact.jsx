import React from 'react'

const Contact = () => {
  return (
    <div class=" bg-[#f6f6f6]  flex justify-center  h-full sm:h-[70vh] items-center">
        <div class="max-w-[1200px] mx-auto">
            <div>
                <div class="grid grid-cols-1 md:grid-cols-2">

                    <div class="p-6 mr-2 bg-white font-semibold rounded-xl flex flex-col justify-around">
                        <h1 class="text-4xl sm:text-5xl text-black">
                            Contact <span>Me</span>
                        </h1>
                        <p class="text-normal text-lg font-medium text-black mt-2">
                            Let's connect on LinkedIn! <br/> or send me an Email
                        </p>

                        <div class="flex items-center mt-2 text-gray-400">
                            <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin = 'round'>
                                <path stroke-linecap='round' stroke-linejoin = 'round'> </path>

                            </svg>
                            
                        </div>
                    </div>

                    <form action='I' method="post" class="p-6 flex flex-col justify-center max-w-[7000px]">
                        <div class="flex flex-col">
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-2 px-3 rounded-lg bg-gray-200 border-gray-50 text-black"></input>
                        </div>
                        <div class="flex flex-col">
                            <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-2 px-3 rounded-lg bg-gray-200 border-gray-50 text-black"></input>
                        </div>
                        <div class="flex flex-col">
                            <textarea name="message" id="message" placeholder="Your Message" class=" w-100  h-24 mt-2 py-2 px-3 rounded-lg bg-gray-200 border-gray-50 text-black"></textarea>
                        </div>

                        <button type="submit" class="md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
