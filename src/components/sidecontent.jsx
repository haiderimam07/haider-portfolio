import React from 'react'
import profileImage from '../../src/assets/profile.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { usePortfolio } from '../context/PortfolioContext.jsx'
const sidecontent = () => {
    const { portfolio } = usePortfolio()
    return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-start w-full lg:w-1/4 lg:min-w-[300px] lg:max-w-[350px] lg:sticky lg:top-0 transition-all duration-300 ease-in-out lg:h-[800px]">
            <div className="w-full  flex flex-col items-center  text-center">
                <div className=' flex items-center justify-between gap-3 lg:block   m-2 p-2'>
                    <img src={portfolio.profileImage || profileImage} alt="Profile" srcset="" className="w-25 h-25 rounded-3xl object-cover drop-shadow-[] mx-auto" />
                    <div className='font-bold text-2xl  '>{portfolio.name}</div>
                </div>
                <div>{portfolio.educationCollege?.name}</div>
                <div className='flex'>
                    <span className='p-1'><a href={portfolio.linkedin} target="_blank"
                        rel="noopener noreferrer" className=''><FaLinkedin /></a></span>
                    <span className='p-1'> <a href={portfolio.leetcode} target="_blank"
                        rel="noopener noreferrer"><SiLeetcode /></a></span>
                    <span className='p-1'><a href={portfolio.github} target="_blank"
                        rel="noopener noreferrer"><FaGithub /></a></span>
                </div>
                <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
            </div>
            <div className="hidden lg:block bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">My Skills</h2>
                <div className="space-y-6">
                    {/* Row */}
                    <div>
                        <div className="flex items-baseline justify-between text-gray-800">
                            <span className="font-medium">C/C++</span>
                            <span className="text-sm text-gray-600">80%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                            <div className="h-2 bg-gray-600 rounded-full w-[80%]"></div>
                        </div>
                    </div>


                    <div>
                        <div className="flex items-baseline justify-between text-gray-800">
                            <span className="font-medium">Frontend Development</span>
                            <span className="text-sm text-gray-600">80%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                            <div className="h-2 bg-gray-600 rounded-full w-[80%]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-baseline justify-between text-gray-800">
                            <span className="font-medium">Backend Development</span>
                            <span className="text-sm text-gray-600">60%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                            <div className="h-2 bg-gray-600 rounded-full w-[60%]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-baseline justify-between text-gray-800">
                            <span className="font-medium">JavaScript</span>
                            <span className="text-sm text-gray-600">90%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                            <div className="h-2 bg-gray-600 rounded-full w-[90%]"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default sidecontent
