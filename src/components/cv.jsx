import '../styles/cv.css'

export default function Cv({profile, educationList}) {
  return (
    <div className="cvContainer">
      <div className="cvHeader">
        <div className="headerPhoto">
          <h3>200 x 200</h3>
        </div>
        <div className="headerText">
          <div className="cvTitle">
            <h1>{profile.name}</h1>
            <h2>{profile.jobTitle}</h2>
          </div>
          <div className="cvContact">
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
          </div>
        </div>
      </div>
      <div className="cvBody">
        <div className="cvSidebar">
          <div className="cvEducation">
            <h2>Education</h2>
            {educationList.length !== 0 && educationList.map((education) => {
              return (
                <div className='studyEntry' key={crypto.randomUUID()}>
                  <p>{education.study}</p>
                  <p>{education.university}</p>
                  <p>{education.date}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="cvMain">
          <div className="cvAboutMe">
            <h2>About Me</h2>
            <p>{profile.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  )
}