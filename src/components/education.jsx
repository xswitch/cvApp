import { useState } from "react";
import "../styles/education.css";

export default function Education({
  add,
  educationList,
  removeEducation,
  editEducationEntry,
}) {
  const [editingIndex, setEditingIndex] = useState(undefined);
  let newEducation = {
    study: "",
    university: "",
    date: undefined,
  };

  let edit = {}

  return (
    <>
      <h4>Study</h4>
      <input
        type="text"
        placeholder="Computer Science"
        onChange={(e) => (newEducation.study = e.target.value)}
      />
      <h4>University</h4>
      <input
        type="text"
        placeholder="MIT"
        onChange={(e) => (newEducation.university = e.target.value)}
      />
      <h4>Date</h4>
      <input
        type="text"
        placeholder="2020-2022"
        onChange={(e) => (newEducation.date = e.target.value)}
      />
      <button
        className="addButton"
        onClick={() => {
          add(newEducation);
        }}
      >
        ADD
      </button>
      {educationList.length > 0 &&
        educationList.map((educationEntry, index) => {
          if (editingIndex === index) edit = {...educationEntry}
          return editingIndex !== index ? (
            <div key={crypto.randomUUID()} className="educationEntry">
              <p>{educationEntry.study}</p>
              <p>{educationEntry.university}</p>
              <p>{educationEntry.date}</p>
              <div>
                <button
                  className="removeButton"
                  onClick={() => removeEducation(index)}
                >
                  REMOVE
                </button>
                <button
                  className="editButton"
                  onClick={() => {
                    setEditingIndex(index)
                  }}
                >
                  EDIT
                </button>
              </div>
            </div>
          ) : (
            <div key={crypto.randomUUID()} className="educationEntry">
              <input
                type="text"
                defaultValue={educationEntry.study}
                onChange={(ev) => edit.study = ev.target.value}
              />
              <input
                type="text"
                defaultValue={educationEntry.university}
                onChange={(ev) => edit.university = ev.target.value}
              />
              <input
                type="text"
                defaultValue={educationEntry.date}
                onChange={(ev) => edit.date = ev.target.value}
              />
              <button
                className="editButton"
                onClick={() => {
                  editEducationEntry(index, edit);
                  setEditingIndex(undefined);
                }}
              >
                DONE
              </button>
            </div>
          );
        })}
    </>
  );
}
