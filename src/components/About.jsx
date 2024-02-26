import React from "react";
import fillerImg from "../assets/codingstockpic.jpg";

const About = () => {
  return (
    <div className="py-10 h-auto bg-[#ffffff] text-black" id="about">
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={fillerImg}
              alt=""
              className="object-cover rounded-xl h-[300] "
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-black my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h3>
              <p className="tet-justify leading-7 w-11/12">
                My name is{" "}
                <span className=" text-black font-semibold">Moiz Saleem</span>,
                I am a proactive and driven{" "}
                <span className=" text-black font-semibold">
                  Mathematics and Computer Science
                </span>{" "}
                undergraduate student at the
                <span className=" text-black font-semibold">
                  {" "}
                  University of Bristol
                </span>{" "}
                with a passion for mathematics, finance and technology. I have
                cultivated valuable experience in these fields through a
                multitude of extracurricular engagements and personal projects,
                and my primary interests centre on, AI & machine learning,
                financial technology and probability and statistics. I'm excited
                to connect with like-minded individuals and explore the
                limitless potential in the worlds of mathematics and technology.
              </p>
            </div>
          </div>
          {/* <div className='flex mt-10 items-center gap-7'>

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

                </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
