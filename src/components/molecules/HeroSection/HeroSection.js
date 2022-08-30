import React from 'react'
import '../HeroSection/HeroSection.css'
import NavBar from '../NavBar/NavBar'

export default function HeroSection() {
  return (
    <div className='Herosection'>
        <NavBar />
    <div className='hero__text'>
    <h1>ENJOY</h1>
      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Mi mauris arcu aenean in <br /> mauris elementum sed non. In sapien enim</p>
      <form action='' className='input'>
      <input placeholder='Hi' className='searchbar'/>
      <button  class="material-symbols-outlined"> 
        search
      </button>
      </form>
    </div>
    </div>
  )
}
