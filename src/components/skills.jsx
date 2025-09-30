import React from 'react' 
import { usePortfolio } from '../context/PortfolioContext.jsx'

const Pill = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm">
    <span className="text-base">{icon}</span>
    {label}
  </span>
)

const Card = ({ title, icon, children }) => (
  <div className="bg-gray-50 p-6 rounded-lg h-full">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
    </div>
    {children}
  </div>
)

const Skills = () => {
  const { portfolio } = usePortfolio()
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Programming Languages */}
        <Card title="Programming Languages" icon="💻">
          <div className="flex flex-wrap gap-3">
            {(portfolio.skills?.programmingLanguages || []).map((pl) => (
              <Pill key={pl} icon="" label={pl} />
            ))}
          </div>
        </Card>

        {/* Frontend Development */}
        <Card title="Frontend Development" icon="🖥️">
          <div className="flex flex-wrap gap-3">
            {(portfolio.skills?.frontend || []).map((fe) => (
              <Pill key={fe} icon="" label={fe} />
            ))}
          </div>
        </Card>

        {/* Backend Development */}
        <Card title="Backend Development" icon="🧩">
          <div className="flex flex-wrap gap-3">
            {(portfolio.skills?.backend || []).map((be) => (
              <Pill key={be} icon="" label={be} />
            ))}
          </div>
        </Card>

        {/* Databases */}
        <Card title="Databases" icon="🗃️">
          <div className="flex flex-wrap gap-3">
            {(portfolio.skills?.databases || []).map((db) => (
              <Pill key={db} icon="" label={db} />
            ))}
          </div>
        </Card>

        {/* AI/ML */}
        

        {/* Tools */}
        <Card title="Tools" icon="🛠️">
          <div className="flex flex-wrap gap-3">
            {(portfolio.skills?.tools || []).map((tool) => (
              <Pill key={tool} icon="" label={tool} />
            ))}
          </div>
        </Card>

        {/* Problem Solving & DSA */}
        
      </div>

      <div className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Problem Solving & DSA</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏆</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">LeetCode</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <Pill icon="📆" label="100DaysOfCode+" />
              </div>
              <p className="text-gray-600 mt-3">{portfolio.leetcodeCount ? `${portfolio.leetcodeCount}+ problems solved` : ''} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
