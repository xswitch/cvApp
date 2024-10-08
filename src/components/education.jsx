export default function Education({add}) {
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
      <button onClick={() => add(newEducation)}>ADD</button>
    </>
  )
}