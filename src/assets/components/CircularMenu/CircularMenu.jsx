import React from "react";
import { useState } from "react";
import omnitrix from '../CircularMenu/O100.png'
import af1 from '../CircularMenu/AlienFace/DiamondHead.png';
import af2 from '../CircularMenu/AlienFace/Waybig-removebg-preview.png';
import af3 from '../CircularMenu/AlienFace/HeatBlast.png';
import af4 from '../CircularMenu/AlienFace/FourArms.png';
import './CircularMenu.css'
const CircularMenu=()=>
    {
        return(
            <div className="flex items-center justify-center">
            <div className="menu fixed  bg-green-600 bottom-20 right-10">
                <input type="checkbox" id="toggle"/>
                <label htmlFor="toggle" id="show-menu">
                    <div className="btn">
                    {/* <i class="fa-solid fa-bomb menubtn" className="menubtn"></i> */}
                    <img src={omnitrix} className="" alt="" />
                    <i class="fa-solid fa-wand-magic-sparkles closebtn" className="closebtn"></i>
                    </div>
                    <div className="btn">
                        {/* <i class="fa-solid fa-pen"></i> */}
                        <img src={af1} className="w-12" alt="" />
                        </div>
                    <div className="btn">
                        {/* <i class="fa-solid fa-pen"></i> */}
                        <img src={af2} className="w-12" alt="" />
                        
                        </div>
                    <div className="btn">
                        {/* <i class="fa-solid fa-pen"></i> */}
                        <img src={af3} className="w-10" alt="" />

                        </div>
                    <div className="btn">
                        {/* <i class="fa-solid fa-pen"></i> */}
                        <img src={af4} className="w-10" alt="" />
                        
                    </div>
                    <div className="btn"><i class="fa-solid fa-pen"></i></div>
                </label>
            </div>
            </div>
        )
    }
export default CircularMenu;