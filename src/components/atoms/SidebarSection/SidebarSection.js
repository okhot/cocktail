import React from 'react'
import './SidebarSection.css'

function SidebarSection({title, options}) {
  return (
      <div className="SideBar__category">
        <h4>{title}</h4>
        {options.map(option => <p key={option}>{option}</p>)}
      </div>
  )
}

export default SidebarSection
