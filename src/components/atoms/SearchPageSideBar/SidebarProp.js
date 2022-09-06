import React from 'react'
import '../SearchPageSideBar/SidebarProp.css'
import SearchPageSideBar from './SearchPageSideBar'

function SidebarProp() {
  return (
   <section className='sidebar__ingridients'>
        <SearchPageSideBar 
    title='redpepper'
    ingridient='black'
    count='300'
    />

<SearchPageSideBar 
ingridient1='rice'
/>
   </section>
  )
}

export default SidebarProp
