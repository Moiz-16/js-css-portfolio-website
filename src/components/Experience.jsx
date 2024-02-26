import React from "react";
import proj1 from "../assets/placeholder.png";
import proj2 from "../assets/placeholder2.png";

import upReach from "../assets/upReach_logo.jpg";
import Kets from "../assets/kets_logo.png";
import Three from "../assets/three_logo.png";

const Experience = () => {
  return (
    <div class="bg-[#f6f6f6] " id="experience">
      <div class=" pt-10  md:pb-4 sm:pb-24 max-w-[1200px] mx-auto h-full">
        <div class="mx-auto px-10 md:px-8">
          <h3 class="text-4xl font-semibold text-center ">
            My <span>Experience</span>
          </h3>
          <div class="mb-4 flex items-center justify-between">
            <div class="flex flex-col gap-4"></div>
          </div>
          <div class=" grid gap-4 grid-cols-1  xl:grid-cols-3 md:gap-6 xl:gap-8">
            <p class="group relative block  bg-blue-200 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={Three}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110 group-hover:opacity-25  "
              />
              <div class="opacity-0 hover:opacity-100 duration-300 px-8 py-8 absolute inset-0 z-10 flex flex-col justify-around content-centre text-center">
                <div class="text-3xl font-semibold">Three UK</div>
                <div class="font-semibold">Jul 23 - Feb 24</div>
                <div class="   ">
                  Worked as a salesman in the telecommunications industry,
                  supporting customers through the sales journey by asking
                  targeted questions to establish needs and providing specific
                  product packages for each customer situation to maximise their
                  benefit, while collaborating effectively to exceed team and
                  personal KPIs.
                </div>
              </div>
            </p>

            <p class="group relative block  bg-blue-200 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={Kets}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110 group-hover:opacity-25  "
              />
              <div class="opacity-0 hover:opacity-100 duration-300 px-8 py-8 absolute inset-0 z-10 flex flex-col justify-around content-centre text-center">
                <div class="text-3xl font-semibold">KETS Quantum Security</div>
                <div class="font-semibold">Aug 21</div>
                <div>
                  Explored KETS' technology, project management approach, and
                  product promotion strategies alongside the team. As part of a
                  collaborative effort, we delved into researching quantum
                  technology to create a comprehensive group presentation on the
                  fundamentals of quantum computers.
                </div>
              </div>
            </p>

            <p class="group relative block  bg-blue-200 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={upReach}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110 group-hover:opacity-25  "
              />
              <div class="opacity-0 hover:opacity-100 duration-300 px-8 py-8 absolute inset-0 z-10 flex flex-col justify-around content-centre text-center ">
                <div class="text-3xl font-semibold">upReach</div>

                <div>
                  Selected to participate in the upReach Tech500 program, which
                  involves exploring the technology sector, exposure to employer
                  opportunities and insight days.
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
