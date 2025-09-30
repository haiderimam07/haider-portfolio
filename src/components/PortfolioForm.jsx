import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const PortfolioForm = ({ onSubmitComplete }) => {
  const { setPortfolio } = usePortfolio()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    leetcode: '',
    about: '',
    profileImage: '',
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
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setForm((prev) => ({ ...prev, profileImage: reader.result }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPortfolio(form)
    onSubmitComplete && onSubmitComplete()
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Enter your portfolio details</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact No</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile Link</label>
            <input name="github" value={form.github} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile Link</label>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LeetCode Profile Link</label>
            <input name="leetcode" value={form.leetcode} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">About Me</label>
            <textarea name="about" rows="4" value={form.about} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input name="location" value={form.location} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
          </div>

          <div className="md:col-span-2 h-[1px] bg-gray-200 my-2"></div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">College Name</label>
                <input value={form.educationCollege.name} onChange={(e)=>setForm(p=>({...p, educationCollege:{...p.educationCollege, name:e.target.value}}))} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                <input value={form.educationCollege.graduationYear} onChange={(e)=>setForm(p=>({...p, educationCollege:{...p.educationCollege, graduationYear:e.target.value}}))} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marks (CGPA/%)</label>
                <input value={form.educationCollege.marks} onChange={(e)=>setForm(p=>({...p, educationCollege:{...p.educationCollege, marks:e.target.value}}))} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                <input value={form.educationSchool.name} onChange={(e)=>setForm(p=>({...p, educationSchool:{...p.educationSchool, name:e.target.value}}))} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <input value={form.educationSchool.year} onChange={(e)=>setForm(p=>({...p, educationSchool:{...p.educationSchool, year:e.target.value}}))} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marks (%)</label>
                <input value={form.educationSchool.marks} onChange={(e)=>setForm(p=>({...p, educationSchool:{...p.educationSchool, marks:e.target.value}}))} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 h-[1px] bg-gray-200 my-2"></div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
            <p className="text-sm text-gray-600 mb-4">Select multiple options where applicable.</p>

            <MultiSelect label="Programming Languages" options={["C","C++","Java","Python","JavaScript","TypeScript","Go","Rust","Kotlin","Swift"]} values={form.skills.programmingLanguages} onChange={(vals)=>setForm(p=>({...p, skills:{...p.skills, programmingLanguages:vals}}))} />
            <MultiSelect label="Frontend Development" options={["HTML","CSS","SASS","TailwindCSS","Bootstrap","React","Next.js","Redux","Zustand","Framer Motion"]} values={form.skills.frontend} onChange={(vals)=>setForm(p=>({...p, skills:{...p.skills, frontend:vals}}))} />
            <MultiSelect label="Backend Development" options={["Node.js","Express","NestJS","FastAPI","Django","Flask","Spring Boot","GraphQL"]} values={form.skills.backend} onChange={(vals)=>setForm(p=>({...p, skills:{...p.skills, backend:vals}}))} />
            <MultiSelect label="Databases" options={["MongoDB","MySQL","PostgreSQL","SQLite","Firebase","Redis","DynamoDB"]} values={form.skills.databases} onChange={(vals)=>setForm(p=>({...p, skills:{...p.skills, databases:vals}}))} />
            <MultiSelect label="Tools" options={["Git","GitHub","GitLab","Docker","Kubernetes","VS Code","Figma","Postman","Jest","Webpack","Vite"]} values={form.skills.tools} onChange={(vals)=>setForm(p=>({...p, skills:{...p.skills, tools:vals}}))} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LeetCode Problems Solved</label>
            <input name="leetcodeCount" value={form.leetcodeCount} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">Generate Portfolio</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PortfolioForm

const MultiSelect = ({ label, options, values, onChange }) => {
  const toggle = (option) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option))
    } else {
      onChange([...values, option])
    }
  }
  return (
    <div className="mb-4 md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button type="button" key={opt} onClick={() => toggle(opt)} className={`px-3 py-1 rounded-full border ${values.includes(opt) ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-700 border-gray-300'}`}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
