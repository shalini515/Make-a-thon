import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Pane - Hidden on Small Screens */}
      <div className="hidden md:flex md:w-5/12 bg-gray-800 flex-col items-center justify-center p-8">
        <img src="/logo.png" alt="Logo" className="w-24 md:w-32 h-24 md:h-32 mb-4" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        ></div>
      </div>

      {/* Right Pane (Registration Form) */}
      <div className="w-full md:w-7/12 flex flex-col items-center justify-center bg-white px-6 py-10 md:p-12 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">REGISTER</h1>
        <p className="text-sm text-gray-600 mb-6">Welcome!</p>
        
        <form className="w-full max-w-md flex flex-col">
          <input 
            type="email" 
            placeholder="Email" 
            className="mb-3 p-3 border border-gray-300 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="mb-3 p-3 border border-gray-300 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="mb-3 p-3 border border-gray-300 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
          />
          
          <div className="relative">
          <select
            className="mb-4 p-3 border border-gray-300 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base appearance-none w-full pr-10"
            defaultValue="">
            <option value="" disabled hidden className="text-gray-500">
              Account type
            </option>
            <option value="volunteer" className="text-black">Volunteer</option>
            <option value="disabled" className="text-black">Disabled</option>
          </select>

            <span className="absolute right-3 top-3 pointer-events-none text-gray-600">&#9662;</span>
          </div>
          
          <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition text-sm md:text-base">
            Sign In
          </button>
          <p className="text-gray-600 mt-3 text-xs md:text-sm text-center">or Login with</p>
          
          <button className="flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-full mt-2 w-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition text-sm md:text-base">
            <FcGoogle className="text-xl md:text-2xl" /> Continue with Google
          </button>
          
          <button className="flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-full mt-2 w-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition text-sm md:text-base">
            <FaApple className="text-xl md:text-2xl" /> Continue with Apple
          </button>
          
          <p className="text-gray-600 mt-4 text-xs md:text-sm text-center">
            Already have an account? <a href="#" className="text-blue-600">Login now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;


























