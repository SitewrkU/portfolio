import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills, RankTable } from '../../data/skills'

import './about.css'
import icons from '../../styles/icons'

export default function About({ setTooltipContent }) {
  const HandleRank = ({rank}) => {
    const matched = RankTable.find(item => item.rank === rank);
    const Icon = matched.icon
    return <Icon color={matched.color} size={32}/> 
  }

  useEffect(() => {
    AOS.init({ 
      offset: -20,
      duration: 400, 
      once: true,
     });
  }, []);

  return (
    <div className="about" id='about'>
      <h2 data-aos="fade"><icons.FaRegEye/> A little about me...</h2>
      <div className="about-text">
        <div className="about-el">
          <icons.FaHeart className='section-icon'/>
          <p data-aos="zoom-in-left">I'm a <b>frontend developer</b> and student passionate about creating user-friendly web experiences.</p>
        </div>
        <div className="about-el">
          <icons.FaLaptopCode className='section-icon' />
          <p data-aos="zoom-in-right">
            My core stack includes HTML, CSS, and JavaScript, with hands-on 
            experience in React and TypeScript. I'm also familiar with modern 
            tools like Tailwind CSS, Sass, and Bootstrap for styling, and have 
            worked with Node.js and MongoDB for backend basics.
          </p>
        </div>
        <div className="about-el">
          <icons.IoMdTrendingUp className='section-icon' />
          <p data-aos="zoom-in-left">My goal is to grow step by step and turn my passion for development into a professional career.</p>
        </div>
      </div>

      <h2 className='skills-h'><icons.FaTools/> My skills</h2>
      <div className="skills-list">
        {skills.map( ({id, icon: Icon, title, color, rank }) => (
          <div 
            key={id}
            id={id} 
            className="skill-el" 
            style={{ backgroundColor: color + "20", borderColor: color }}
            data-aos="flip-left"
            data-aos-delay={(100 + id * 100).toString()}
            data-tooltip-id="glb-tooltip"
            onMouseEnter={() => setTooltipContent(<HandleRank rank={rank} />)}
          >
            <p style={{color: color}}>
              <Icon color={color} />
              {title}
            </p>
          </div>
        ) )}
      </div>
    </div>
  )
}
