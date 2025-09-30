import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { usePortfolio } from '../context/PortfolioContext.jsx'
const Contact = () => {
  const { portfolio } = usePortfolio()
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <p className="text-gray-600">{portfolio.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">📱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <p className="text-gray-600">{portfolio.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Location</p>
                  <p className="text-gray-600">{portfolio.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Social Links</h2>
            <div className="flex space-x-4">
              <a href={portfolio.linkedin} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                <FaLinkedin />
              </a>
              <a href={portfolio.github} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                <FaGithub />
              </a>
              <a href={portfolio.leetcode} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Send Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message Subject"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
