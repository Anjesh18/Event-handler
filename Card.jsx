import React from 'react'

export default function Card({id,date,img,location,heading}) {
    const {month,year} =date
  return (
    <div className='bg-slate-300 rounded-2xl flex flex-row w-full'>
        <div className='flex flex-col'>
      <h1>{heading}</h1>
      <p>
        <span>{date.month}</span>
        <span>{date.year}</span>
      </p>
      <p>{location}</p>
      </div>
      <div className='h-56 w-64 p-4 mt-6'>
        <img src={img} alt="img"/>
      </div>
    </div>
  )
}
