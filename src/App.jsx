import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ProjectsSlider from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <ProjectsSlider/>
      <Contact/>
    </>
  )
}
