import React from "react";
import {Link} from "react-router-dom";
const Header=()=>
    {
        return(
            <div className="header flex justify-between w-full items-center px-5 py-5">
                <div className="flex w-screen bg-transparent">

                    <div className="banner fade-in w-full text-4xl text-green-600 font-grobold">
                        ABD
                    </div>
                    <nav className="fade-in flex space-x-10 shadow-xl hover:shadow-green-600 transition ease-in duration-400 border-none border-r-10">
                        <Link to="/Content" className="text-white  text-pretty text-justify text-lg hover:text-green-600  hover:shadow-2xl hover:shadow-white transition duration-1000 ease-in-out font-grobold">Home</Link>
                        <Link to="/About" className="text-white  text-pretty text-justify text-lg hover:text-green-600  hover:shadow-2xl hover:shadow-white transition duration-1000 ease-in-out font-grobold">About</Link>
                        <Link to="/" className="text-white  text-pretty text-justify text-lg hover:text-green-600  hover:shadow-2xl hover:shadow-white transition duration-1000 ease-in-out font-grobold">Education</Link>
                        <Link to="/" className="text-white  text-pretty text-justify text-lg hover:text-green-600  hover:shadow-2xl hover:shadow-white transition duration-1000 ease-in-out font-grobold">Achievements</Link>
                        <Link to="/" className="text-white  text-pretty text-justify text-lg hover:text-green-600  hover:shadow-2xl hover:shadow-white transition duration-1000 ease-in-out font-grobold">Contact</Link>
                    </nav>
                </div>
            </div>
        ); 
    };
export default Header;