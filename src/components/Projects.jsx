import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "Completed",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      status: "In Progress",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts for multiple cities with interactive maps.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      status: "Completed",
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects, skills, and professional experience with smooth animations.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      status: "Completed",
      link: "#"
    }
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-700">{project.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
