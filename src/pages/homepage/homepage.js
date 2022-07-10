import React from 'react'
import './style.css'

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Kevin Patel</span></h1>
        <h2>A Front End Engineer.</h2>
        <p className='desc'> "I love the coding and apart from coding i like to do travelling,singging,Running and GYM, also my interest to learn new technologies and develop new things." </p>
        <div>
          <a href="https://github.com/kevinpatel12" target="blank">github</a>
          <a href="https://www.linkedin.com/feed/" >Linkedin</a>
        </div>
      </div>
    </>
  )
}
