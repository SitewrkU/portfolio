import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from '../../data/skills'

import './about.css'
import icons from '../../styles/icons'

export default function About() {
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
          <p data-aos="zoom-in-left">I’m a <b>frontend</b> developer and student who loves making the web more comfortable to use.</p>
        </div>
        <div className="about-el">
          <icons.FaLaptopCode className='section-icon' />
          <p data-aos="zoom-in-right">
            My tools of choice are <b>HTML, CSS,</b> and <b>JavaScript</b> (A little of React), with a growing interest in Node.js. <br />
            Through multiple small pet projects I’ve been exploring design, usability, and clean code.
          </p>
        </div>
        <div className="about-el">
          <icons.IoMdTrendingUp className='section-icon' />
          <p data-aos="zoom-in-left">My goal is to keep improving, step by step, and turn my passion for development into a career.</p>
        </div>
      </div>

      <h2 className='skills-h'><icons.FaTools/> My skills</h2>
      <div className="skills-list">
        {skills.map( ({id, icon: Icon, title, color }) => (
          <div 
            key={id}
            id={id} 
            className="skill-el" 
            style={{ backgroundColor: color + "20", borderColor: color }}
            data-aos="flip-left"
            data-aos-delay={(100 + id * 100).toString()}
          >
            <p style={{color: color}}><Icon color={color} /> {title}</p>
          </div>
        ) )}
      </div>
    </div>
  )
}
