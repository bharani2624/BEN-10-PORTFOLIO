import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';

const ProjectCarousel = () => {
    const projectData = [
        {
            title: "Hygiene Monitor",
            description: "Developed a system for real-time worker safety compliance using YOLOv5, reducing manual checks by 40% and achieving 95.5% accuracy.",
            technology: "Python, OpenCV, YOLOv5, Flask",
            link: "https://github.com/bharani2624/HYGIENE_MONITOR_ALONG_WITH_DS"
        },
        {
            title: "ToDo List",
            description: "Developed a task management tool with real-time TCP communication and an intuitive interface to boost productivity, supported by SQL for robust data handling.",
            technology: "QT, FireBase",
            link: "https://github.com/bharani2624/TODO-LIST-QT"
        },
        {
            title: "Arm Controller",
            description: "Created a six-axis robot simulator with realistic movements and detailed Blender models for enhanced visualization and real-time motion simulation.",
            technology: "QT, Unity",
            link: "https://github.com/bharani2624/SIX_AXIS_ARM_CONTROL"
        },
        {
            title: "SDBMS",
            description: "Designed a CRUD-based student database system with a responsive UI, managing 1,000+ records and integrating RESTful APIs for seamless backend communication.",
            technology: "React.js, SQL, Express.js",
            link: "https://github.com/DHAYABHARAN-MJ/STUDENT-DATABASE-MANAGEMENT"
        },
        {
            title: "BEN10-DWM",
            description: "Customized dwm with transparency, custom keybindings, rofi launcher, and amixer audio controls. Includes the dwm-alpha patch and startup scripts for easy setup.",
            technology: "C, Shell, picom, rofi",
            link: "https://github.com/bharani2624/BEN-10-DWM"
        },
        {
            title: "HRBS",
            description: "The Hostel Room Booking System is a Java application designed to manage hostel accommodations, enabling user authentication, room management, and booking functionalities.",
            technology: "AndroidStudio, Java",
            link: "https://github.com/bharani2624/HostelRoomBookingSystem"
        }
    ];

    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 0,
        slidesPerView: 1,
        loop: false,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    };

    return (
        <div className="relative mt-10 bg-transparent backdrop-blur-sm lg:px-24 py-10 w-[95vw] md:w-screen" id="projects">
            <div className="px-10 lg:px-24 md:px-24 overflow-hidden project-carousel-container"> {/* Add class here */}
                <h2 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl font-bold text-green-600 mb-8">Projects</h2>
                <div className="w-[80vw] md:w-full flex lg:ml-2 md:ml-2">
                    <Swiper {...params}>
                        {projectData.map((data, key) => (
                            <div key={key} className="border-none flex flex-col overflow-x-hidden overflow-y-hidden p-5 bg-green-500/20 border rounded-lg backdrop-blur-xl" >
                                <h1 className="font-semibold text-white h-28 md:h-24 lg:h-24">{data.title}</h1>
                                <p className="text-lg text-green-500 text-left py-10">{data.description}</p>
                                <p className="text-lg ml-0 absolute mt-64 md:mt-[270px] lg:mt-52 italic">{data.technology}</p>
                                <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-green-500 absolute mt-72 md:mt-[300px] lg:mt-60 underline">
                                    Github
                                </a>
                            </div>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ProjectCarousel;
