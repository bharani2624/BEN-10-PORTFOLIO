import React from "react";
import { useState } from "react";
import useSound from 'use-sound';
import { useNavigate } from 'react-router-dom';
import omnitrixAudio from '../CircularMenu/OmnitrixAudio.mp3';
import omnitrix from '../CircularMenu/O100.png';
import omnitrixOn from '../CircularMenu/omnitrixOn.png';
import af1 from '../CircularMenu/AlienFace/DiamondHead.png';
import af2 from '../CircularMenu/AlienFace/Waybig-removebg-preview.png';
import af3 from '../CircularMenu/AlienFace/HeatBlast.png';
import af4 from '../CircularMenu/AlienFace/FourArms.png';
import './CircularMenu.css';

const CircularMenu = () => {
    const [playSound] = useSound(omnitrixAudio);
    const history=useNavigate();
    const skill=()=>
        {
            history('/Achievements');
            console.log("Function Is Working");
        }
    return (
        <div className="flex items-center justify-center" onClick={playSound}>
            <div className="menu fixed bg-green-600 bottom-5 right-5">
                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle" id="show-menu">
                    <div className="btn">
                        <img src={omnitrix} className="menubtn" onClick={playSound} alt="" />
                        <img src={omnitrixOn} className="closebtn" alt="" />
                    </div>
                    
                    <div className="btn relative group">
                        <img src={af1} className="i1 w-12" alt="" />
                        <span className="absolute left-1/2 mb-2 w-full h-full flex items-center justify-center -translate-x-1/2 p-2 text-sm text-white bg-green-700/50 blur-0 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Achievements
                        </span>
                    </div>
                    
                    <div className="btn relative group">
                        <img src={af2} className="i2 w-12" alt=""  />
                        <span className="absolute left-1/2 mb-2 w-full h-full flex items-center justify-center -translate-x-1/2 p-2 text-sm text-white bg-green-700/50 blur-0 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={skill}>
                            Skills
                        </span>
                    </div>
                    
                    <div className="btn relative group">
                        <img src={af3} className="i3 w-10" alt="" />
                        <span className="absolute left-1/2 mb-2 w-full h-full flex items-center justify-center -translate-x-1/2 p-2 text-sm text-white bg-green-700/50 blur-0 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Projects
                        </span>
                    </div>
                    
                    <div className="btn relative group">
                        <img src={af4} className="i4 w-10" alt="" />
                        <span className="absolute left-1/2 mb-2 w-full h-full flex items-center justify-center -translate-x-1/2 p-2 text-sm text-white bg-green-700/50 blur-0 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Contacts
                        </span>
                    </div>
                    <div className="btn relative group">
                        <img src={af4} className="i4 w-10" alt="" />
                        <span className="absolute left-1/2 mb-2 w-full h-full flex items-center justify-center -translate-x-1/2 p-2 text-sm text-white bg-green-700/50 blur-0 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Contacts
                        </span>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default CircularMenu;
