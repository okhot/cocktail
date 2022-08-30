import React from 'react'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
  <section className='navbar'> 
     <span   className="material-symbols-outlined">
    apps
    </span>

    <div className='navbar__links'>
      <h4>Home</h4>
      <h4>Cocktails</h4>
      <h4>About</h4>
      <h4>Contact</h4>
    </div>
  </section>
  )
}

export default NavBar
