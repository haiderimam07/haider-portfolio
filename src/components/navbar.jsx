import React, { useState, useEffect } from 'react'

const Navbar = ({ onPageChange, currentPage }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            setIsVisible(false)
          } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
            // Scrolling up or at top
            setIsVisible(true)
          }
          
          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { id: 'summary', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'Summary' }
  ]

  return (
    <>
      {/* Desktop Navbar (lg and above) */}
      <nav 
        className={`hidden lg:block sticky top-4 z-50 bg-gray-800 rounded-lg w-full transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-2">
          {/* Logo - Left side */}
          <button 
            onClick={() => onPageChange('home')}
            className="text-white text-xl font-bold hover:text-gray-300 transition-colors duration-200"
          >
            Portfolio
          </button>

          {/* Navigation Items - Center */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-white hover:text-gray-300 transition-colors duration-200 px-2 py-1 rounded-md text-sm ${
                  currentPage === item.id 
                    ? 'bg-gray-700 text-white' 
                    : 'hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button - Right side */}
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md font-medium text-sm transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navbar (below lg) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-sm border-t border-gray-700">
        <div className="flex items-center justify-around px-2 py-1 sm:justify-center sm:gap-2 md:gap-4">
          {/* Logo */}
          <button 
            onClick={() => onPageChange('home')}
            className={`text-white text-xs font-medium px-1 sm:px-2 py-1 rounded transition-colors duration-200 ${
              currentPage === 'home' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            Home
          </button>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-white text-xs font-medium px-1 sm:px-2 py-1 rounded transition-colors duration-200 ${
                currentPage === item.id 
                  ? 'bg-gray-700' 
                  : 'hover:bg-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Contact Button */}
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-1 sm:px-2 py-1 rounded transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar