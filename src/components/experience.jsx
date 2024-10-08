import { useState } from "react";
import "../styles/experience.css";

export default function Experience({
  add,
  removeExperience,
  experiences,
  editExperience,
}) {
  const [currentExperience, setCurrentExperience] = useState({
    company: "",
    date: "",
    role: "",
    description: "",
  });
  const [editingIndex, setEditingIndex] = useState(undefined);
  const changeExperience = (property, value) => {
    setCurrentExperience({
      ...currentExperience,
      [property]: value,
    });
  };

  return (
    <>
      <div className="experienceInputContainer">
        <div className="experienceInput">
          <h4>Company</h4>
          <input
            type="text"
            value={currentExperience.company}
            onChange={(e) => changeExperience("company", e.target.value)}
          />
        </div>
        <div className="experienceInput">
          <h4>Date</h4>
          <input
            type="text"
            value={currentExperience.date}
            onChange={(e) => changeExperience("date", e.target.value)}
          />
        </div>
        <div className="experienceInput">
          <h4>Job Title</h4>
          <input
            type="text"
            value={currentExperience.role}
            onChange={(e) => changeExperience("role", e.target.value)}
          />
        </div>
        <div className="experienceInput">
          <h4>Job Description</h4>
          <input
            type="text"
            value={currentExperience.description}
            onChange={(e) => changeExperience("description", e.target.value)}
          />
        </div>
        {editingIndex === undefined ? (
          <button className="addButton" onClick={() => add(currentExperience)}>
            ADD
          </button>
        ) : (
          <div className="editExperience">
            <button className="editButton" onClick={() => {
              setEditingIndex(undefined)
              editExperience(editingIndex, currentExperience)
            }}>
              DONE
            </button>
            <button className="removeButton" onClick={() => {
              setEditingIndex(undefined)
              removeExperience(editingIndex)
            }}>DELETE</button>
          </div>
        )}
      </div>
      <div className="experienceList">
        {experiences.length !== 0 && <h4>Experiences</h4>}
        {experiences.length !== 0 &&
          experiences.map((experience, index) => {
            return (
              <div key={crypto.randomUUID()} className="experienceListEntry">
                <p>{experience.company}</p>
                <button className="editButton" onClick={() => {
                  setCurrentExperience({
                    company: experience.company,
                    date: experience.date,
                    role: experience.role,
                    description: experience.description
                  })
                  setEditingIndex(index)
                }}>
                  EDIT
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
