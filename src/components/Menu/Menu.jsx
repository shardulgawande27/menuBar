import React, { useState } from 'react'
import "./menu.css"
import logo from "./../../assets/logo.jpg"

export const Menu = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav>
      <img src={logo} alt="" />
      
      <div >

      <ul className= {showMenu? "menulinks active" : "menulinks"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact" id='contact'>Contact</a></li>

      </ul>
      </div>

      <div className="mobile" id='mobile'>
        <i className= {showMenu ? 'fa-solid fa-xmark':'fa-solid fa-bars'} onClick={handleClick} ></i>
      </div>

    </nav>
  )
}
