import React from "react";
import flutter_shoe_calendar_project from "../assets/flutter_shoe_calendar_project.png";
import he_poster from "../assets/he_project.png";
import react_website from "../assets/portfolio_site_project.png";
import placeholder from "../assets/placeholder.png";

const Projects = () => {
  return (
    <div class="bg-[#f6f6f6]">
      <div class=" py-6 max-w-[1200px] mx-auto">
        <div class="mx-auto px-10 md:px-8">
          <div class="mb-4 flex items-center justify-between">
            <div class="flex flex-col gap-4">
              <h3 class="text-4xl font-semibold ">
                My <span>Projects</span>
              </h3>
              <p class="text-gray-800">These are my different projects!</p>
            </div>
          </div>
          <div class="grid gap-4 grid-cols-3 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <p class="group overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={flutter_shoe_calendar_project}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"
              />
            </p>

            <p class="group overflow-hidden rounded-lg shadow-lg md: col-span-2 md:h-80">
              <img
                src={react_website}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"
              />
            </p>

            <p class="group overflow-hidden rounded-lg shadow-lg md: col-span-2 md:h-80">
              <img
                src={he_poster}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"
              />
            </p>

            <p class="group  overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src={placeholder}
                alt=""
                class="h-full w-full object-cover object-center transition
                                            duration-200 group-hover:scale-110"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
