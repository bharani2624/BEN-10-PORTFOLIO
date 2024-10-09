import React, { useEffect } from "react";
import { useState } from "react";
import '../components/Content.css'
import './Glitch.css';

const phrases=
[
  "AI Enthusiast",
  "Linux Enthusiast",
  "Web Developer",
  "React Developer",
  "QT Developer"
]
const Content = () => {
    const [currentPhrase,setCurrentPhrase]=useState(0);
    useEffect(()=>
        {
            const interval=setInterval(()=>
                {
                    setCurrentPhrase((prevPhrase)=>(prevPhrase+1)%phrases.length);
                },2000);
        return ()=>{clearInterval(interval);}
            },[])
    return (
        <div className="relative flex flex-col lg:flex-row px-4 lg:px-8 py-8 lg:space-x-10 lg:space-y-0  h-screen justify-center items-center">
            <div className="text-teal-50 text-5xl w-full h-40">
                 Hi I 'M <h1 className="text-ben10 inline">
                A<span className="text-ben10">B</span><span className="text-ben10">D</span>
            </h1>
            <div className="known w-full" style={{minHeight:'50px'}}>
            <span className="glitch" data-text={phrases[currentPhrase]}>{phrases[currentPhrase]}</span>
            </div>
            </div>
            
            </div>
    )
}
export default Content