import { useState } from 'react'
import '../styles/language.css'

export default function Language({languages, add, removeLanguage}) {
  const [currentLanguage, setCurrentLanguage] = useState('')
  return (
    <>
    <div className='languageInput'>
      <input value={currentLanguage} onChange={(e) => setCurrentLanguage(e.target.value)} />
      <button className="addButton" onClick={() => add(currentLanguage)}>ADD</button>
    </div>
    {languages.length > 0 && (<h4>Languages</h4>)}
    {(languages.length > 0 && (
      languages.map((language, index) => {
        return (
          <div key={crypto.randomUUID()} className="languageEntry">
            <p>{language}</p>
            <button className="removeButton" onClick={() => removeLanguage(index)}>REMOVE</button>
          </div>
        )
      })
    ))}
    </>
  )
}