import React from "react";
import proj1 from "../assets/placeholder.png";
import proj2 from "../assets/placeholder2.png";

import upReach from "../assets/upReach_logo.jpg";
import Kets from "../assets/kets_logo.jpeg";
import Three from "../assets/three_logo.png";

const Experience = () => {
  return (
    <div class="bg-[#f6f6f6] ">
      <div class=" py-6 max-w-[1200px] mx-auto">
        <div class="mx-auto px-10 md:px-8">
          <h3 class="text-4xl font-semibold text-center ">
            My <span>Experience</span>
          </h3>
          <div class="mb-4 flex items-center justify-between">
            <div class="flex flex-col gap-4"></div>
          </div>
          <div class=" grid gap-4 grid-cols-1 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <p class="group relative block  bg-blue-300 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={Three}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110 group-hover:opacity-25  "
              />
              <div class="opacity-0 hover:opacity-100 duration-300 px-8 py-8 absolute inset-0 z-10 flex flex-col justify-around text-center items-center">
                <div class="text-3xl font-semibold">Three UK</div>
                <div class="font-semibold">Jul 23 - Feb 24</div>
                <div>
                  Worked as salesman in the telecommunications industry,
                  consistently exceeding targets and KPIs to maximise store
                  benefits while building lasting relationships with customers
                  through supporting them through the sales journey.
                </div>
              </div>
            </p>

            <p class="group relative block  bg-blue-300 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={Kets}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110 group-hover:opacity-25  "
              />
              <div class="opacity-0 hover:opacity-100 duration-300 px-8 py-8 absolute inset-0 z-10 flex flex-col justify-around text-center items-center">
                <div class="text-3xl font-semibold">KETS Quantum Security</div>
                <div class="font-semibold">Aug 21</div>
                <div>
                  Worked with the team to explore quantum technology from a
                  technological and entreprenuereal standpoint through
                  interacting with leading experts. Also worked with peers to
                  successfully research and produce a short research project.
                </div>
              </div>
            </p>

            <p class="group relative block  bg-blue-300 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={upReach}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110 group-hover:opacity-25  "
              />
              <div class="opacity-0 hover:opacity-100 duration-300 px-8 py-8 absolute inset-0 z-10 flex flex-col justify-around text-center items-center">
                <div class="text-3xl font-semibold">upReach</div>

                <div>
                  Selected to participate in the Tecg500 program, which involves
                  exploring the technology sector, such as through insight days.
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
