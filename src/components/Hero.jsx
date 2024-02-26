import React from "react";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

// import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div
        className="sm:h-svh  h-screen mx-auto flex flex-col-reverse sm:flex-row justify-center align-center"
        id="work"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-7xl sm:text-4xl text-4xl font-bold text-black">
            Hi! I am Moiz Saleem
          </p>
          <h1 className="md:text-9xl sm:text-6xl text-7xl font-bold md:py-6 py-3">
            <TypeAnimation
              cursor="false"
              sequence={["Student", 1500, "Developer", 1500]}
              wrapper="span"
              speed={65}
              repeat={Infinity}
            />
          </h1>
          {/* <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-700'>with 5 years experience</p>
            </div> */}
          <div className='"text-5xl flex justify-start gap-16 my-7 text-purple-600'>
            <a href="https://github.com/Moiz459">
              <img
                src={githubIcon}
                alt="My GitHub Profile"
                className=" sm:h-12 h-10"
              />
            </a>

            <a href="https://www.linkedin.com/in/moiz-saleem-144a9a1a2/">
              <img
                src={linkedinIcon}
                alt="My LinkedIn profile"
                className=" sm:h-12 h-10"
              />
            </a>
            <a href="mailto:moizsaleem903@gmail.com">
              <img src={emailIcon} alt="My email" className=" sm:h-12 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
