import { useState } from 'react'
import SideContent from './components/sidecontent'
import MainContent from './components/mainContent'
import Landing from './components/Landing'
import PortfolioForm from './components/PortfolioForm'

// import './App.css'

function App() {
  const [step, setStep] = useState('landing') // landing -> form -> portfolio

  const renderBody = () => {
    if (step === 'landing') {
      return <Landing onCreate={() => setStep('form')} />
    }
    if (step === 'form') {
      return <PortfolioForm onSubmitComplete={() => setStep('portfolio')} />
    }
    return (
      <div className='bg-[#F4F2EE]'>
        <div className="flex w-full min-h-screen gap-4 p-4 lg:flex-row lg:max-w-[1400px] lg:mx-auto lg:gap-6 lg:p-6 flex-col transition-all duration-300 ease-in-out bg-[#F4F2EE]">
          <SideContent />
          <MainContent />
        </div>
      </div>
    )
  }

  return (
    <>
      {renderBody()}
    </>
  )
}

export default App
