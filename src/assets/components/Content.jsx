import React from "react";
import abdimage from '../images/abdimage.png'
import { ReactTyped } from "react-typed";
const Content = () => {
    return (
        <div className="w-screen flex px-5 py-5 space-y-6">
            <div className="myself text-8xl text-white w-6/12 font-grobold relative
            ">
                <div className="w-6/12">
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
                        typeSpeed={100} // Typing speed for the first line
                        backSpeed={0}
                        startDelay={2500}
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "You Have <span style='color: gray;'>Entered</span>",
                        ]}
                        typeSpeed={100} // Typing speed for the second line
                        backSpeed={0}
                        startDelay={4500} // Delay before starting the second line
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "Into My <span style='color: gray;'>Reality</span>,",
                        ]}
                        typeSpeed={100} // Typing speed for the third line
                        backSpeed={0}
                        startDelay={6000} // Delay before starting the third line
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "And You Are Gonna Learn <span style='color: gray;'>A Lot</span>",
                        ]}
                        typeSpeed={100} // Typing speed for the fourth line
                        backSpeed={0}
                        startDelay={7500} // Delay before starting the fourth line
                        showCursor={false}
                    />
                    <br />
                    <ReactTyped
                        strings={[
                            "About <span style='color: gray;'>Me</span>",
                        ]}
                        typeSpeed={100} // Typing speed for the fifth line
                        backSpeed={0}
                        startDelay={8500} // Delay before starting the fifth line
                        showCursor={false}
                    />
                </div>

            </div>
            <div className="myimage relative cursor-pointer flex justify-center items-center border-green-500 border rounded-2xl text-white text-5xl w-6/12 hover:border-no'">
                <img
                    src={abdimage}
                    className="h-full w-full rounded-2xl hover:opacity-80  hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out">
                    <span className="text-yellow-300 font-grobold text-3xl">
                        <a href="https://www.linkedin.com/in/bharanidharaun-a-443b4a256">Wanna <span className="text-white">Know</span> More <br /> <center>About <span className="text-white">Me</span></center></a>
                    </span>
                </div>
            </div>

        </div>
    )
}
export default Content