import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tunsalator from '../images/tunsalator.png'; 

const Projects = () => {
    
    const projectData = [
        {
            title: "Hygiene Monitor",
            description: "Developed a system for real-time worker safety compliance using YOLOv5, reducing manual checks by 40% and achieving 95.5% accuracy.",
            technology:"Python, OpenCV, YOLOv5, Flask",
            link: "https://github.com/bharani2624/HYGIENE_MONITOR_ALONG_WITH_DS"
        },
        {
            title: "ToDo List",
            description:"Developed a task management tool with real-time TCP communication and an intuitive interface to boost productivity, supported by SQL for robust data handling.",
            technology:"QT, FireBase", 
            link: "https://github.com/bharani2624/TODO-LIST-QT"
        },
        {
            title: "Arm Controller",
            description:"Created a six-axis robot simulator with realistic movements and detailed Blender models for enhanced visualization and real-time motion simulation.",
            technology:"QT, Unity", 
            link: "https://github.com/bharani2624/SIX_AXIS_ARM_CONTROL"
        },
        {
            title: "SDBMS",
            description:"Designed a CRUD-based student database system with a responsive UI, managing 1,000+ records and integrating RESTful APIs for seamless backend communication.",
            technology:"React.js, SQL, Express.js", 
            link: "https://github.com/DHAYABHARAN-MJ/STUDENT-DATABASE-MANAGEMENT"
        },
    
        {
            title: "BEN10-DWM",
            description:"Customized dwm with transparency, custom keybindings, rofi launcher, and amixer audio controls. Includes the dwm-alpha patch and startup scripts for easy setup.",
            technology:"C, Shell, picom, rofi", 
            link: "https://github.com/bharani2624/BEN-10-DWM"
        },
        {
            title: "HRBS",
            description:"The Hostel Room Booking System is a Java application designed to manage hostel accommodations, enabling user authentication, room management, and booking functionalities. ",
            technology:"AndroidStudio,Java", 
            link: "https://github.com/bharani2624/HostelRoomBookingSystem"
        }
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 3, // Default to 3 slides on large screens
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Screen width <= 1024px (medium screens)
                settings: {
                    slidesToShow: 1, // Show 1 slide on medium screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // Screen width <= 768px (small screens)
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="relative mt-10 w-[483px] lg:w-[1900px] md:w-[849px] overflow-x-hidden flex-col p-10 justify-center items-center" id="projects">
            <div className=" flex items-center lg:ml-36">
            <h2 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl font-bold text-green-600 mb-8">Projects</h2>
            </div>
            <Slider {...settings} className="w-full">
                {projectData.map((project, index) => (
                    <div key={index}>
                        <div className="max-w-sm mx-auto h-72 bg-green-700/30 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           
                                {/* <img className="rounded-t-lg w-44 mx-auto" src={project.image} alt={project.title} /> */}
                                <h1 className="text-6xl justify-center items-center flex text-white mt-2">
                                    {project.title}
                                </h1>
                            
                            <div className="p-5">
                                <a href={project.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white/80 dark:text-white">
                                        {project.technology}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-yellow-100 dark:text-gray-400">
                                    {project.description}
                                </p>
                                <a href={project.link} className="inline-flex  mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800  ">
                                    Github
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Projects;
