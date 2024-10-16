import React from "react";

const Footer = () => {
    return (
        <footer className="relative  backdrop-blur-sm  w-12/12 md:w-full lg:w-10/12 md:p-20 lg:ml-auto lg:mr-auto p-10  ml-0 lg:flex-row justify-center items-center">
            <div className="contact bg-green-500/20 h-72 border p-5">
                <h1 className="text-green-600 text-4xl flex">
                    Contact
                </h1>
                <div className="forms mt-5 space-y-5">
                    <div className="contantform flex flex-col space-y-6">
                        <input
                            type="text"
                            className="border-b border-gray-300 outline-none w-full bg-transparent focus:border-green-600"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            className="border-b border-gray-300 bg-transparent outline-none p-1 w-full focus:border-green-600"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="border-b border-gray-300 p-1 w-full bg-transparent outline-none focus:border-green-600"
                            placeholder="Query"
                        />

                    <div className="btn bg-white flex"><button className=" bg-white w-6/12">asdfsaj</button></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
