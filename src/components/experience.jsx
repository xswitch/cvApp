import { useState } from 'react'
import '../styles/experience.css'

export default function Experience({add, removeExperience, experiences}) {
  const [currentExperience, setCurrentExperience] = useState({
    company: '',
    date: '',
    role: '',
    description: '',
  })
  const changeExperience = (property, value) => {
    setCurrentExperience({
      ...currentExperience,
      [property]: value,
    })
  }

  return (
    <>
      <div className="experienceInputContainer">
        <div className="experienceInput">
          <h4>Company</h4>
          <input type="text" value={currentExperience.company} onChange={(e) => changeExperience('company', e.target.value)} />
        </div>
        <div className="experienceInput">
          <h4>Date</h4>
          <input type="text" value={currentExperience.date} onChange={(e) => changeExperience('date', e.target.value)} />
        </div>
        <div className="experienceInput">
          <h4>Job Title</h4>
          <input type="text" value={currentExperience.role} onChange={(e) => changeExperience('role', e.target.value)} />
        </div>
        <div className="experienceInput">
          <h4>Job Description</h4>
          <input type="text" value={currentExperience.description} onChange={(e) => changeExperience('description', e.target.value)} />
        </div>
        <button className='addButton' onClick={() => add(currentExperience)}>ADD</button>
      </div>
    </>
  )
}