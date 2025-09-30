import React, { createContext, useContext, useState } from 'react'

const defaultPortfolio = {
  name: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  github: '',
  leetcode: '',
  profileImage: '',
  about: '',
  educationCollege: { name: '', graduationYear: '', marks: '' },
  educationSchool: { name: '', year: '', marks: '' },
  skills: {
    programmingLanguages: [],
    frontend: [],
    backend: [],
    databases: [],
    tools: []
  },
  leetcodeCount: ''
}

const PortfolioContext = createContext({
  portfolio: defaultPortfolio,
  setPortfolio: () => {}
})

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState(defaultPortfolio)
  return (
    <PortfolioContext.Provider value={{ portfolio, setPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => useContext(PortfolioContext)


