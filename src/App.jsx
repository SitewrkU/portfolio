import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ProjectsSlider from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import GlobalTooltip from './styles/tooltip/GlobalTooltip'

export default function App() {
  const [tooltipContent, setTooltipContent] = useState(null);
  return (
    <>
      <GlobalTooltip content={tooltipContent} />
      <Header/>
      <Hero/>
      <About setTooltipContent={setTooltipContent}/>
      <ProjectsSlider/>
      <Contact/>
    </>
  )
}
