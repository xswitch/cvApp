import { useState } from "react"
import Input from "./input"
import Section from "./section"

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(0)

  const changeIndex = (number) => {
    if (openIndex === number) {
      setOpenIndex(0)
    } else {
      setOpenIndex(number)
    }
  }

  return (
    <div className="sidebar">
      <Section title={'General'} onClick={() => changeIndex(1)} index={openIndex} id={1}>
        <Input text={'Full Name'} placeholder={'John Doe'}></Input>
        <Input text={'Job Title'} placeholder={'Full Stack Developer'}></Input>
        <Input text={'Email'} type="email" placeholder={'john@gmail.com'}></Input>
        <Input text={'Phone'} type="tel" placeholder={'+4799112233'}></Input>
      </Section>
      <Section title={'Education'} onClick={() => changeIndex(2)} index={openIndex} id={2}>
        <h3>Stuff</h3>
      </Section>
      <Section title={'Language'} onClick={() => changeIndex(3)} index={openIndex} id={3}>
        <h3>Moar stuff</h3>
      </Section>
      <Section title={'Experience'} onClick={() => changeIndex(4)} index={openIndex} id={4}>
        <h3>EVEN MOAR</h3>
      </Section>
    </div>
  )
}