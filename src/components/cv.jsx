import "../styles/cv.css";

export default function Cv({ profile, educationList, languages, experiences }) {
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
            {educationList.length !== 0 &&
              educationList.map((education) => {
                return (
                  <div className="studyEntry" key={crypto.randomUUID()}>
                    <p>{education.study}</p>
                    <p>{education.university}</p>
                    <p>{education.date}</p>
                  </div>
                );
              })}
          </div>
          <div className="cvLanguage">
            <h2>Language</h2>
            {languages.length !== 0 && (
              <div>
                {languages.map((language) => {
                  return <p key={crypto.randomUUID()}>{language}</p>;
                })}
              </div>
            )}
          </div>
        </div>
        <div className="cvMain">
          <div className="cvAboutMe">
            <h2>About Me</h2>
            <p>{profile.aboutMe}</p>
          </div>
          <div className="cvExperience">
            <h2>Experience</h2>
            {experiences.length !== 0 && (
              experiences.map(experience => {
                return (
                  <div key={crypto.randomUUID()} className="experienceEntry">
                    <div className="experienceTitle">
                      <h3>{experience.company}</h3>
                      <p>{experience.date}</p>
                    </div>
                    <h4>{experience.role}</h4>
                    <p>{experience.description}</p>
                  </div>
                )
              })
            )}
            <div className="experienceEntry">
              <div className="experienceTitle">
                <h3>Krit Co.</h3>
                <p>2020-2022</p>
              </div>
              <h4>Marketing Director</h4>
              <p>Led the development of scalable web applications, managing a team of 5 engineers. conducting code reviews and knowledge-sharing sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
