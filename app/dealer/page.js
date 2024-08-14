'use client'
import React, { useState } from 'react';
import ContactInfo from '../components/contactInfo';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar';
import axios from 'axios';
import Footer from '../components/footer';

const DealerPage = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    surname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData({
      mobile: '',
      name: '',
      surname: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/send_dealer.php', new URLSearchParams(formData));
      toast.success("მონაცემები გაიგზავნა")
      resetFormData();
    } catch (error) {
      console.error('Error:', error);
      toast.error("დაფიქსირდა შეცდომა")
      resetFormData();
    }
  };

  

  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="md:w-1/2 flex flex-col justify-center pr-8">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">დარეგისტრირდი დილერად</h2>
        <p className="mb-2 text-black">შეუერთდით Gcars-ის გუნდს</p>
      </div>
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="სახელი"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="გვარი"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="მობილურის ნომერი"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none w-full"
          >
            გაგზავნა
          </button>
        </form>
      </div>
    </div>
    <ContactInfo />
    <Footer /> 
    </>
  );
};

export default DealerPage;
