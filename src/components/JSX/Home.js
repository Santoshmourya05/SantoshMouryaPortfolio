import React from 'react'
import Experience from './Experience'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Resume from './Resume'
import Contact from './Contact.js'

export default function Home() {
  return (
    <div className='home'>
    <About/>
    <Education/> 
    <Skills/>
    <Experience/>
    <Projects/>
    <Resume/>
    <Contact/>
    </div>
  )
}
