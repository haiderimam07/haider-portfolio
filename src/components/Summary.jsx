import React from 'react'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const Summary = () => {
  const { portfolio } = usePortfolio()
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Professional Summary</h1>
      
      <div className="space-y-8">
        {/* Removed Personal Information as requested */}

        {/* Education */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium text-gray-700">{portfolio.educationCollege?.name}</h3>
              <p className="text-gray-600">{portfolio.educationCollege?.graduationYear ? `Graduation Year: ${portfolio.educationCollege.graduationYear}` : ''}</p>
              <p className="text-sm text-gray-500">{portfolio.educationCollege?.marks}</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium text-gray-700">{portfolio.educationSchool?.name}</h3>
              <p className="text-sm text-gray-500">{portfolio.educationSchool?.year}</p>
              <p className="text-sm text-gray-500">{portfolio.educationSchool?.marks}</p>
            </div>
            
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium text-gray-700">Frontend Developer Intern</h3>
              <p className="text-gray-600">Freelance Work</p>
              <p className="text-sm text-gray-500">June 2023 - August 2023</p>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>• Developed responsive web applications using React.js</li>
                <li>• Collaborated with design team to implement UI/UX designs</li>
                <li>• Optimized application performance and user experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills - Progress Bars */}
        <div className="bg-gray-50 p-6 rounded-lg">
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
                <span className="font-medium">Java</span>
                <span className="text-sm text-gray-600">50%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div className="h-2 bg-gray-600 rounded-full w-[50%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between text-gray-800">
                <span className="font-medium">Object Oriented Programming</span>
                <span className="text-sm text-gray-600">60%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div className="h-2 bg-gray-600 rounded-full w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between text-gray-800">
                <span className="font-medium">Database Management Systems</span>
                <span className="text-sm text-gray-600">50%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div className="h-2 bg-gray-600 rounded-full w-[50%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between text-gray-800">
                <span className="font-medium">Operating Systems</span>
                <span className="text-sm text-gray-600">50%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div className="h-2 bg-gray-600 rounded-full w-[50%]"></div>
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
    </div>
  )
}

export default Summary
