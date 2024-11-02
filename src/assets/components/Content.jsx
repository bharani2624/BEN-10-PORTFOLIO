import React, { useEffect, useState } from "react";
import '../components/Content.css';
import './Glitch.css';

import { PiLinkedinLogoBold } from "react-icons/pi";
import { LiaGithubSquare } from "react-icons/lia";
import { AiFillFile } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";

const phrases = [
  "AI Enthusiast",
  "Linux Enthusiast",
  "Web Developer",
  "React Developer",
  "QT Developer"
];

const Content = () => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = 'ben10-portfolio/src/assets/images/resume.pdf';
    link.download = 'ABD-RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const linkedIn=()=>
    {
      window.location.href = 'https://www.linkedin.com/in/bharanidharaun-a-443b4a256/';
    }
    const gitHub=()=>
      {
        window.location.href = 'https://github.com/bharani2624';
      }

  const [show, setShow] = useState(false);

  const textCopy = () => {
    navigator.clipboard.writeText("bharani2624baru@gmail.com")
      .then(() => {
        setShow(true);
        setTimeout(() => { setShow(false); }, 2000);
      })
      .catch(err => console.log(err));
  };

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 2000);
    return () => { clearInterval(interval); };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-x-hidden flex flex-col lg:flex-row px-4 lg:px-8 py-8 items-center text-center justify-center" id="home">
      {show && (
        <div className="fixed top-10 bg-green-500/50 w-40 text-white/40 py-2 text-center border rounded-3xl">
          Successfully Copied The Email
        </div>
      )}
      
      <div className="text-teal-50 text-5xl w-full h-40">
        Hi I 'M <h1 className="text-ben10 inline text-8xl" style={{ minWidth: '200px' }}>
          A<span className="text-ben10">B</span><span className="text-ben10">D</span>
        </h1>
        <div className="known w-full text-7xl" style={{ minHeight: '50px', height: '50px' }}>
          <span className="glitch" data-text={phrases[currentPhrase]}>{phrases[currentPhrase]}</span>
        </div>
        <div className="social-icons mt-10 flex items-center justify-center space-x-3">
          <div className="glasscontainer flex space-x-3 w-40 h-16 items-center justify-center rounded-xl backdrop-blur-lg bg-green-600/20 border border-white/30 shadow-xl">
            <PiLinkedinLogoBold className="cursor-pointer hover:text-ben10 transition-all duration-500 ease-in-out hover:h-24 hover:w-24" onClick={linkedIn}/>
            <LiaGithubSquare className="cursor-pointer hover:text-ben10 transition-all duration-500 ease-in-out hover:h-24 hover:w-24" onClick={gitHub} />
            <AiFillFile onClick={downloadFile} className="cursor-pointer w-10 h-10 hover:text-ben10 transition-all duration-500 ease-in-out hover:h-24 hover:w-24" />
            <AiOutlineGoogle onClick={textCopy} className="cursor-pointer hover:text-ben10 transition-all duration-500 ease-in-out hover:h-24 hover:w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
