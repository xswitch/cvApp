import { useState } from "react";
import "./App.css";
import Section from "./components/section";
import Input from "./components/input";

function App() {
  const [profile, setProfile] = useState({
    name: "Bjørn Ivar",
    jobTitle: "Full Stack Developer",
    email: "bivarmong@gmail.com",
    phone: "93248199",
  });

  const [openIndex, setOpenIndex] = useState(0);

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

  return (
    <content>
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
        </Section>
        <Section
          title={"Education"}
          onClick={() => changeIndex(2)}
          index={openIndex}
          id={2}
        >
          <h3>Stuff</h3>
        </Section>
        <Section
          title={"Language"}
          onClick={() => changeIndex(3)}
          index={openIndex}
          id={3}
        >
          <h3>Moar stuff</h3>
        </Section>
        <Section
          title={"Experience"}
          onClick={() => changeIndex(4)}
          index={openIndex}
          id={4}
        >
          <h3>EVEN MOAR</h3>
        </Section>
      </div>
      <main>
        <h2>{profile.name}</h2>
        <h2>{profile.jobTitle}</h2>
        <h2>{profile.email}</h2>
        <h2>{profile.phone}</h2>
      </main>
    </content>
  );
}

export default App;
