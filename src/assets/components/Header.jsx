import React from "react";
const Header=()=>
    {
        return(
            <div className="header flex justify-between w-full items-center px-4 py-3">
                <div className="flex w-full bg-transparent">

                    <div className="banner fade-in w-full text-4xl text-green-600 font-grobold">
                        ABD
                    </div>
                    <nav className="fade-in flex space-x-10">
                        <a href="" className="text-white  text-pretty text-justify text-lg hover:text-green-600 font-grobold">Home</a>
                        <a href="" className="text-white text-pretty text-justify text-lg hover:text-green-600 font-grobold">About</a>
                        <a href="" className="text-white text-pretty text-justify text-lg hover:text-green-600 font-grobold">Services</a>
                        <a href="" className="text-white text-pretty text-justify text-lg hover:text-green-600 font-grobold">Achievements</a>
                        <a href="" className="text-white text-pretty text-justify text-lg hover:text-green-600 font-grobold">Contact</a>

                    </nav>
                </div>
            </div>
        );
    };
export default Header;