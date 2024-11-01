import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tunsalator from '../images/tunsalator.png'; // Sample image

const Projects = () => {
    // Array of project data
    const projectData = [
        {
            title: "Tunsalator",
            description: "An advanced translation app powered by AI, helping users translate languages with ease.",
            image: tunsalator,
            link: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A real-time weather tracking app providing live updates on global weather conditions.",
            image: tunsalator, // Replace with the actual image path
            link: "#"
        },
        {
            title: "Crypto Tracker",
            description: "A dashboard for tracking cryptocurrency prices and trends in real time.",
            image: tunsalator, // Replace with the actual image path
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio showcasing projects, skills, and experience in web development.",
            image: tunsalator, // Replace with the actual image path
            link: "#"
        },
        {
            title: "E-commerce Store",
            description: "An online store built with React and integrated with a payment gateway.",
            image: tunsalator, // Replace with the actual image path
            link: "#"
        },
        {
            title: "Blog Platform",
            description: "A blogging platform allowing users to create, share, and interact with blog posts.",
            image: tunsalator, // Replace with the actual image path
            link: "#"
        },
        {
            title: "Chat Application",
            description: "A real-time chat app built with socket.io and Node.js for seamless communication.",
            image: tunsalator, // Replace with the actual image path
            link: "#"
        }
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 3, // Default to 3 slides on large screens
        slidesToScroll: 1,
        autoplay: true,
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
        <div className="relative lg:w-[1900px] md:w-[849px] overflow-x-hidden flex p-10 justify-center items-center" id="projects">
            <Slider {...settings} className="w-full">
                {projectData.map((project, index) => (
                    <div key={index}>
                        <div className="max-w-sm mx-auto bg-white/10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={project.link}>
                                <img className="rounded-t-lg w-44 mx-auto" src={project.image} alt={project.title} />
                            </a>
                            <div className="p-5">
                                <a href={project.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {project.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {project.description}
                                </p>
                                <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
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
