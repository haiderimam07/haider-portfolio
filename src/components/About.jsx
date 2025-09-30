import React from 'react'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const About = () => {
    const { portfolio } = usePortfolio()
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-8 min-h-screen shadow-sm">
            <div className='space-y-8'>
                {/* Intro */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">{portfolio.about}</p>
                </div>

                {/* What I'm Doing */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">What I'm Doing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Android Development */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                            {/* Icon */}
                            <div className="shrink-0 rounded-md p-3 bg-white border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h10M7 17h10M6 9v6m12-6v6M9 3l.8 1.6M15 3l-.8 1.6" />
                                </svg>
                            </div>
                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Frontend Development</h3>
                                <p className="text-gray-600 mt-2">
                                    Creating user-friendly Frontend application with modern design and performance.
                                </p>
                            </div>
                        </div>

                        {/* Backend Development */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                            <div className="shrink-0 rounded-md p-3 bg-white border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h18v6H3zM7 19h10M9 15h6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Backend Development</h3>
                                <p className="text-gray-600 mt-2">
                                    Developing secure, scalable backends with Expressjs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What I'm Learning */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">What I'm Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Web Development */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                            <div className="shrink-0 rounded-md p-3 bg-white border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4h18v12H3zM8 20h8" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Machine Learning</h3>
                                <p className="text-gray-600 mt-2">
                                    Learning to build intelligent systems with modern machine learning techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About