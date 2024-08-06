import React from 'react'

function Search() {
    const months=["January",'February','March','April','May','June','July','August','September','October','November','December']
 const monthRender=()=>{ return <select>
     { months.map((month,index)=>{
       return <option key={index}>{month}</option>
    })}
  </select>
 }
  return (
   <>
   {monthRender()}</>
  )
}

export default Search
