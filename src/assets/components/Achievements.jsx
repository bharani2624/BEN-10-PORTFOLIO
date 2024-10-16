import React, { useState, useEffect } from "react";

// Achievement and Internship data
const achievements = [
  {
    title: "Smart India Hackathon’23 (Hardware Edition) - Winner",
    description: "Developed a comprehensive monitoring system for a dairy plant, focusing on energy consumption, hygiene standards, and waste collection. Led the software development for the Hygiene Monitor using AI technologies like OpenCV and YOLOv5.",
    result: "Top Prize Winner",
    km:"https://github.com/bharani2624/HYGIENE_MONITOR_ALONG_WITH_DS"
  },
  {
    title: "BIT HACK’S 23 - Runner",
    description: "Led the team in intra-college hackathon to develop an innovative productivity tool using Qt with a task assignment feature. Guided the team through development, resulting in a robust solution for productivity enhancement.",
    result: "Runner-up",
    km:"https://github.com/bharani2624/TODO-LIST-QT"
  },
];

const internships = [
  {
    title: "Android App Developer Intern",
    company: "Holistic MD LLP Altheal",
    description: [
      "Developed Android applications and gained hands-on experience in app development.",
      "Collaborated with the team to troubleshoot issues and improve app performance.",
      "Deployed apps to the Play Store, managing the end-to-end release process.",
      "Optimized apps for better user experience and performance.",
    ],
    duration: "Jan 2024 - April 2024",
  },
];

const Achievements = () => {
  return (
    <div className="relative w-screen h-screen bg-transparent backdrop-blur-sm">
      <div className="container mx-auto p-8">
        <section className="mb-16">
          <h2 className="text-4xl xl:text-6xl lg:text-6xl sm:text-6xl  font-bold text-green-600 mb-8">Achievements</h2>
          <div className="group/item grid grid-cols-2 md:grid-cols-2 gap-8 ">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 border-2 border-green-500/10  hover:bg-green-100/50 hover:transition-opacity hover:opa rounded-lg shadow-lg bg-white/10 ">
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-green-100 mb-4">{achievement.description}</p>
                <p className="text-green-600 font-bold">{achievement.result}
                </p>
                <a className="group/edit invisible hover:bg-transparent group-hover/item:visible ..." href={achievement.km}>
                <span className="group-hover/edit:text-white ...">Know More</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-green-600 mb-8">Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div key={index} className="p-6 border-2 border-green-500/10 rounded-lg shadow-lg bg-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{internship.title}</h3>
                <p className="text-green-300 mb-4"><strong>Company:</strong> {internship.company}</p>
                <p className="text-green-100 mb-4">{internship.description.join(" ")}</p>
                <p className="text-green-600 font-bold"><strong>Duration:</strong> {internship.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;
