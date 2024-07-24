'use client'
import React, { useState } from 'react';
import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("../components/leaflet"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    userEmail: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);      
  };
  
  return (
    <footer>
      <section className="text-white bg-black body-font relative">
        <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full lg:w-2/3 md:w-1/2 overflow-hidden">
              <LeafletMap />
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col justify-center md:ml-auto w-full mt-8 md:mt-0 px-10 py-2">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl mb-1 font-medium title-font">დაგვიკავშირდი</h2>
              <div className="relative mb-1">
                <input placeholder='სახელი' type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-1">
                <input placeholder='email' type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-1">
                <textarea placeholder='ტექსტი' id="message" name="message" value={formData.message} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button type='submit' className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black focus:outline-none">გაგზავნა</button>
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
