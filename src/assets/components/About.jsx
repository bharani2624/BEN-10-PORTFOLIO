import React from "react";
import frontend from '../images/react.png';
import backend from '../images/java.png';
import ai from '../images/ai.png';
import linux from '../images/linux.png'
import { IconBase } from "react-icons";


const skills = [
  { name: "AI Developer", description: "Experienced in building AI applications." ,Icon:ai},
  { name: "Frontend Developer", description: "Proficient in creating interactive UIs.",Icon:frontend },
  { name: "Backend Developer", description: "Familiar with data analysis and machine learning.",Icon:backend },
  { name: "Linux", description: "Comfortable with Linux environments." ,Icon:linux},
];

const About = () => {
  return (
    <div className="relative ml-10 md:ml-0 xl:ml-0 sm:ml-0 lg:ml-0 h-screen sm:w-screen sm:h-screen p-0 sm:px-10 md:px-10 lg:px-2 xl:px-44 flex backdrop-blur-sm bg-transparent text-green-500 mt-10 justify-center items-center">
      <div className="flex flex-col lg:flex-row xl:h-96 w-full">

        <div className="flex flex-col xl:w-8/12 p-0">
          <div className="about text-4xl sm:text-5xl md:text-6xl lg:text-7xl absolute top-21">
            About
          </div>
          <div className="about inline bg-transparent mt-6 ml-5 w-96 text-left backdrop-blur-sm border rounded-sm xl:ml-10 xl:mt-10 xl:w-11/12 xl:h-auto sm:bg-transparent sm:w-full md:w-full">
            <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-left p-3 text-opacity-90">
              I’m not your average software developer—I bring a distinctive blend of skills that sets me apart.
              <br /> <br /> With a strong foundation in AI, Linux, Qt development, and modern web technologies like React, I have the versatility to tackle a wide range of challenges.
              <br /> <br /> My expertise lies in crafting dynamic, scalable solutions while ensuring efficiency and a seamless user experience.
              Having participated in several hackathons, I thrive in high-pressure environments and excel at solving real-time problems with innovative approaches.
              <br /><br /> I’m a fast learner, always eager to embrace new tools and technologies to stay ahead of the curve.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center text-center p-5 xl:w-6/12">
          <div className="grid grid-cols-2 mr-auto ml-auto gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-10 xl:mt-20">
            {skills.map((skill, index) => (
              <div key={index} className="bg-black/20 border border-slate-100  flex flex-col space-y-10 items-center justify-center backdrop-blur-md p-3 md:p-5 rounded-lg shadow-lg w-48 sm:w-56 md:w-44 lg:w-64 xl:w-72 xl:p-5 xl:h-64 transition-transform transform hover:scale-95">
                <h3 className="text-xl  sm:text-xl md:text-3xl font-bold text-white">{skill.name}</h3>
                <img src={skill.Icon} className="flex justify-center items-center" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
