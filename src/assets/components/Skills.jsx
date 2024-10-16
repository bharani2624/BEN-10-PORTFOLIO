import React, { useEffect, useRef } from 'react';
import androidstudio from '../images/androidstudio.png'
import bash from '../images/bash.png'
import c from '../images/c.png'
import css from '../images/css.png'
import debian from '../images/debian.png'
import html from '../images/html.png'
import mongodb from '../images/mongodb.png'
import mysql from '../images/mysql.png'
import numpy from '../images/numpy.png'
import opencv from '../images/opencv.png'
import pandas from '../images/pandas.png'
import python from '../images/python.png'
import java from '../images/java.png'
import tensorflow from '../images/tensorflow.png'
import yolo from '../images/yolo.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
const Skills = () => {
  return (
    <div className="relative skills-container h-screen flex justify-center items-center p-2 md:p-24 lg:p-48 rounded-lg shadow-lg text-black bg-transparent backdrop-blur-[2px]">
      <div className="skills w-full space-y-10 p-5 bg-transparent backdrop-blur-lg">
        <h1 className='text-green-600 text-4xl md:text-6xl lg:text-6xl'>Skills</h1>
        <div className="programmingLaguages">
          <h1 className="text-2xl text-white">Programming</h1>
          <div className='flex space-x-2'>
            <img src={c} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={java} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={python} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />

          </div>
        </div>
        <div className="programmingLaguages">
          <h1 className="text-3xl text-white">AI</h1>
          <div className='flex space-x-2'>
            <img src={opencv} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={yolo} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={tensorflow} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={pandas} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={numpy} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
          </div>
        </div>
        <div className="programmingLaguages">
          <h1 className="text-3xl text-white">Linux</h1>
          <div className='flex space-x-2'>
            <img src={debian} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={bash} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
          </div>
        </div>
        <div className="programmingLaguages">
          <h1 className="text-3xl text-white">App Development</h1>
          <div className='flex space-x-2'>
            <img src={androidstudio} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
          </div>
        </div>
        {/* <div className="programmingLaguages">
          <h1 className="text-3xl text-white">UI</h1>
        </div> */}
        <div className="programmingLaguages">
          <h1 className="text-3xl text-white">Web Development</h1>
          <div className='flex space-x-2'>
            <img src={html} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={react} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={css} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={tailwind} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={mongodb} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
            <img src={mysql} className='w-2/12  rounded-full outline-none backdrop-blur-lg md:w-20' alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};


export default Skills;
