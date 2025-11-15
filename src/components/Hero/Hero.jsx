import React from 'react'
import './hero.css'
import icons from '../../styles/icons'

export default function Hero() {
  return (
    <div className="hero">
      <div className="image">
        <img src="/images/profilepic.png" alt="profilepic" className='profile-pic' />
        <p><icons.FaLocationDot/> Ukraine, Lviv</p>
      </div>
      <main>
        <h2>Hi! I’m <span className='myname-span'>IvanBatt</span>,</h2>
        <h3>a frontend developer who builds cool things.</h3>
      </main>
      <a href="#about"><icons.IoIosArrowDown className='arrowDown'/></a>
    </div>
  )
}
