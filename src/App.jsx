import { useState } from "react";
import "./App.css";
import Section from "./components/section";
import Input from "./components/input";
import Cv from "./components/cv";
import Education from "./components/education";
import Language from "./components/language";
import Experience from "./components/experience";

function App() {
  const [profile, setProfile] = useState({
    name: "Bjørn Ivar",
    jobTitle: "Full Stack Developer",
    email: "bivarmong@gmail.com",
    phone: "93248199",
    aboutMe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam quasi laboriosam deleniti officiis omnis excepturi ab a ea pariatur fugiat sit mollitia quo nam nesciunt deserunt dolore, asperiores dolorum?'
  });
  const [educationList, setEducationList] = useState([])
  const [languages, setLanguages] = useState([])
  const [openIndex, setOpenIndex] = useState(0);
  const [experiences, setExperiences] = useState([])

  const addExperience = (experience) => setExperiences([...experiences, experience])

  const removeExperience = (index) => {
    const newList = [...experiences];
    setExperiences([...newList.slice(0, index), ...newList.slice(index + 1)])
  }

  const editExperience = (index, experience) => {
    const newList = [...experiences]
    newList[index] = experience
    setExperiences(newList)
  }

  const addLanguage = (language) => setLanguages([...languages, language])

  const removeLanguage = (index) => {
    const newList = [...languages];
    setLanguages([...newList.slice(0, index), ...newList.slice(index + 1)])
  }

  const changeProfile = (value, property) => {
    setProfile({
      ...profile,
      [property]: value,
    });
  };

  const changeIndex = (number) => {
    if (openIndex === number) {
      setOpenIndex(0);
    } else {
      setOpenIndex(number);
    }
  };

  const addEducation = (education) => {
    const newList = [...educationList]
    newList.push(education)
    setEducationList(newList)
  }

  const removeEducation = (index) => {
    const newList = [...educationList]
    const slicedList = [...newList.slice(0, index), ...newList.slice(index + 1)]
    setEducationList(slicedList)
  }

  const editEducation = (index, editedEntry) => {
    const newList = [...educationList]
    newList[index] = editedEntry
    setEducationList(newList)
  }

  return (
    <div className="content">
      <div className="sidebar">
        <Section
          title={"General"}
          onClick={() => changeIndex(1)}
          index={openIndex}
          id={1}
        >
          <Input
            text={"Full Name"}
            placeholder={"John Doe"}
            onChange={changeProfile}
            name={"name"}
            value={profile.name}
          ></Input>
          <Input
            text={"Job Title"}
            placeholder={"Full Stack Developer"}
            onChange={changeProfile}
            name={"jobTitle"}
            value={profile.jobTitle}
          ></Input>
          <Input
            text={"Email"}
            type="email"
            placeholder={"john@gmail.com"}
            onChange={changeProfile}
            name={"email"}
            value={profile.email}
          ></Input>
          <Input
            text={"Phone"}
            type="tel"
            placeholder={"+4799112233"}
            onChange={changeProfile}
            name={"phone"}
            value={profile.phone}
          ></Input>
          <Input
            text={'About Me'}
            type="textarea"
            placeholder={'Lorem Ipsum'}
            onChange={changeProfile}
            name={'aboutMe'}
            value={profile.aboutMe}
          ></Input>
        </Section>
        <Section
          title={"Education"}
          onClick={() => changeIndex(2)}
          index={openIndex}
          id={2}
          className={'section educationSection'}
        >
          <Education add={addEducation} educationList={educationList} removeEducation={removeEducation} editEducationEntry={editEducation}></Education>
        </Section>
        <Section
          title={"Language"}
          onClick={() => changeIndex(3)}
          index={openIndex}
          id={3}
          className={'section languageSection'}
        >
          <Language add={addLanguage} removeLanguage={removeLanguage} languages={languages}></Language>
        </Section>
        <Section
          title={"Experience"}
          onClick={() => changeIndex(4)}
          index={openIndex}
          id={4}
          className={'section languageSection'}
        >
          <Experience add={addExperience} removeExperience={removeExperience} editExperience={editExperience} experiences={experiences}></Experience>
        </Section>
      </div>
      <main>
        <Cv profile={profile} educationList={educationList} languages={languages} experiences={experiences}></Cv>
      </main>
    </div>
  );
}

export default App;
