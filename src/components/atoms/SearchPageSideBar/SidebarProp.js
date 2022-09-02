import React from 'react'
import '../SearchPageSideBar/SidebarProp.css'
import SearchPageSideBar from './SearchPageSideBar'

function SidebarProp() {
  return (
   <section className='sidebar'>
        <SearchPageSideBar 
    title='redpepper'
    ingridient='black'
    count='300'
    />

   </section>
  )
}

export default SidebarProp
