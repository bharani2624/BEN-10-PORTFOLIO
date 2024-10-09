import React, { useEffect, useState } from "react";
import '../components/Content.css';
import './Glitch.css';
import linkedIn from '../images/linkedin.png';
import cv from '../images/cv.png'
import github from '../images/github.png'
const phrases = [
  "AI Enthusiast",
  "Linux Enthusiast",
  "Web Developer",
  "React Developer",
  "QT Developer"
];

const Content = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 2000);
    return () => { clearInterval(interval); }
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row px-4 lg:px-8 py-8 w-screen h-screen items-center text-center justify-center">
      <div className="text-teal-50 text-5xl w-full h-40">
        Hi I 'M <h1 className="text-ben10 inline text-8xl" style={{ minWidth: '200px' }}>
          A<span className="text-ben10">B</span><span className="text-ben10">D</span>
        </h1>
        <div className="known w-full text-7xl" style={{ minHeight: '50px', height: '50px' }}>
          <span className="glitch" data-text={phrases[currentPhrase]}>{phrases[currentPhrase]}</span>
        </div>
        <div className="social-icons relative space-x-3 mt-10 text-center flex items-center justify-center">
            <div className="glasscontainer flex space-x-3 w-40 h-16 items-center justify-center rounded-xl backdrop-blur-3xl bg-green-600/10 border border-white/10 shadow-xl">
                <img src={linkedIn} alt="" className="" />
                <img src={cv} alt="" className="" />
                <div className="relative cursor-pointer hover:bg-[url('ben10-portfolio/src/assets/images/githubhover.png')]">
                  <img src={github} alt="GitHub" className="w-full h-full" />
            </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
