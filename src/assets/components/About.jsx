import React from "react";

const skills = [
    { name: "Real Time Problem Solver", description: "Experienced in building web applications." },
    { name: "Frontend Developer", description: "Proficient in creating interactive UIs." },
    { name: "Backend Developer", description: "Familiar with data analysis and machine learning." },
    { name: "Linux", description: "Comfortable with Linux environments." },
];

const About = () => {
    return (
        <div className="relative w-screen h-screen p-5 sm:px-10 md:px-20 lg:px-32 xl:px-52 flex flex-col justify-center items-center bg-black text-green-500 mt-10">
            <h1 className="text-3xl mb-8 left-10 sm:text-5xl md:text-6xl lg:text-8xl">About Me</h1>
            <div className="inline bg-green-500/30 backdrop-blur-3xl border rounded-2xl text-center p-5 sm:p-2">
            <div>
                <p className=" inline text-xl sm:text-xl md:text-2xl xl:text-3xl mb-5 p-5 text-white">
                        I’m not your average software developer—I bring a distinctive blend of skills that sets me apart. With a strong foundation in AI, Linux, Qt development, and modern web technologies like React, I have the versatility to tackle a wide range of challenges. My expertise lies in crafting dynamic, scalable solutions while ensuring efficiency and a seamless user experience.
                        Having participated in several hackathons, I thrive in high-pressure environments and excel at solving real-time problems with innovative approaches. I’m a fast learner, always eager to embrace new tools and technologies to stay ahead of the curve. If you’re seeking someone who can combine creativity, technical expertise, and problem-solving prowess, then I’m the one you’re looking for.
                    </p>
            </div>
            </div>    
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 sm:p-2 sm:gap-2 ">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-lg w-28 sm:w-32 md:w-36 lg:w-48 transition-transform transform hover:scale-95">
                        <h3 className="text-2xl font-bold">{skill.name}</h3>
                        <p className="text-xl text-black">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
