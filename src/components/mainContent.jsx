
import React, { useState } from 'react'
import Navbar from './navbar'
import Skills from './skills'
import Projects from './Projects'
import Summary from './Summary'
import Contact from './Contact'
import About from './About'



const MainContent = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case 'summary':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'cv':
        return <Summary />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div className="w-full lg:w-3/4 lg:min-h-screen lg:flex-1 transition-all duration-300 ease-in-out">
      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col items-start justify-start min-h-screen pb-16 lg:pb-6">
        <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
        <div className="mt-4 w-full">
          {renderPageContent()}
        </div>
      </div>
    </div>
  )
}

export default MainContent
