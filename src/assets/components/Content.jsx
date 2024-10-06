import React from "react";
import abdimage from '../images/abdimage.png'
import { ReactTyped } from "react-typed";
const Content = () => {
    return (
        <div className="w-screen flex flex-col lg:flex-row px-4 lg:px-8 py-8 space-y-10 lg:space-x-10 lg:space-y-0">
            <div className="myself text-5xl sm:text-6xl lg:text-8xl text-white w-full lg:w-6/12 font-grobold relative px-6 lg:px-10 py-6 lg:py-10 mt-5">
                <div className="">
                    Welcome to,
                    <br />
                    <span className="text-green-600 font-grobold">
                        ABD's
                    </span> <br />
                    <span className="text-white absolute">
                        <ReactTyped strings={[
                            "<span style='color: white;'>Realm...</span>",
                        ]}
                            cursorChar=""
                            typeSpeed={200}
                            showCursor={true}
                            backSpeed={200}
                            startDelay={500}
                            loop={true}
                        />
                    </span>
                </div>
                <div className="maincontent text-4xl mt-40">
                    <ReactTyped
                        strings={[
                            "Hi <span style='color: gray;'>Visitor</span>,",
                        ]}
                        typeSpeed={100} 
                        backSpeed={0}
                        startDelay={2500}
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "You Have <span style='color: gray;'>Entered</span>",
                        ]}
                        typeSpeed={100} 
                        backSpeed={0}
                        startDelay={4500} 
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "Into My <span style='color: gray;'>Reality</span>,",
                        ]}
                        typeSpeed={100} 
                        backSpeed={0}
                        startDelay={6000} 
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "And You Are Gonna Learn <span style='color: gray;'>A Lot</span>",
                        ]}
                        typeSpeed={100} 
                        backSpeed={0}
                        startDelay={7500} 
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "About <span style='color: gray;'>Me</span>",
                        ]}
                        typeSpeed={100} 
                        backSpeed={0}
                        startDelay={8500} 
                        showCursor={false}
                    />
                </div>

            </div>
            <div className="myimage relative cursor-pointer flex justify-center items-center lg:w-6/12 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-8 text-white text-5xl ">
                <img
                    src={abdimage}
                    className="h-full w-full border-white border-opacity-25 border rounded-2xl hover:opacity-80  hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out">
                    <span className="text-yellow-300 font-grobold text-3xl">
                        <a href="https://www.linkedin.com/in/bharanidharaun-a-443b4a256">Wanna <span className="text-white">Know</span> More <br /> <center>About <span className="text-white hover:text-violet-700">Me</span></center></a>
                    </span>
                </div>
            </div>

        </div>
    )
}
export default Content