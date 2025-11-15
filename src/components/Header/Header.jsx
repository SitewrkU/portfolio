import React from 'react'
import './header.css'
import { BatIcon } from './icon/BatIcon'

export default function Header() {
  return (
    <header>
      <h1><BatIcon color='#87705dff' size={48}/></h1>
      <div className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  )
}
