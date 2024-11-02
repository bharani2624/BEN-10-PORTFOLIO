import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "", query: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailContent = {
            from_name: formData.name,  // Change to match your EmailJS template field
            from_email: formData.email, // Change to match your EmailJS template field
            message: formData.query      // Change to match your EmailJS template field
        };
        
        emailjs.send('service_bgdmuis', 'template_tqtd68d', emailContent, 'J3H48Pks3D4j7kO-b')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    };
    

    return (
        <footer className="relative backdrop-blur-sm flex items-center justify-center xl: p-10">
            <div className="contact bg-green-500/20 h-72 w-full lg:w-8/12 md:w-9/12 border p-5">
                <h1 className="text-green-600 text-4xl">Contact</h1>
                <form className="forms mt-5 space-y-5" onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-b border-gray-300 w-full bg-transparent focus:border-green-600 text-white" placeholder="Name" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border-b border-gray-300 w-full bg-transparent focus:border-green-600 text-white" placeholder="Email" />
                    <input type="text" name="query" value={formData.query} onChange={handleChange} className="border-b border-gray-300 w-full bg-transparent focus:border-green-600 text-white" placeholder="Query" />
                    <div className="bg w-full flex justify-center items-center">
                        <button type="submit" className="bg-white transition-colors duration-200 ease-in-out hover:bg-white/20 w-24 border rounded-sm">Submit</button>
                    </div>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
