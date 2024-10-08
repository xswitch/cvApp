import '../styles/education.css'

export default function Education({add, educationList}) {
  const newEducation = {
    study: '',
    university: '',
    date: undefined,
  }
  return (
    <>
      <h4>Study</h4>
      <input type="text"placeholder="Computer Science" onChange={(e) => newEducation.study = e.target.value} />
      <h4>University</h4>
      <input type="text" placeholder="MIT" onChange={(e) => newEducation.university = e.target.value} />
      <h4>Date</h4>
      <input type="text" placeholder="2020-2022" onChange={(e) => newEducation.date = e.target.value} />
      <button className='addButton' onClick={() => add(newEducation)}>ADD</button>
      {educationList.length > 0 && (
        educationList.map((educationEntry) => {
          return (
            <div key={crypto.randomUUID()} className="educationEntry">
              <p>{educationEntry.study}</p>
              <p>{educationEntry.university}</p>
              <p>{educationEntry.date}</p>
              <div>
                <button className='removeButton'>REMOVE</button>
                <button className='editButton'>EDIT</button>
              </div>
            </div>
          )
        })
      )}
    </>
  )
}