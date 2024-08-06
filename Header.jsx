import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-red-400 flex flex-row justify-between align-center rounded-2xl h-24 lg:w-[1000px] w-[1000px] p-6'>
      <ul className='flex flex-row space-x-11 font-extrabold text-2xl'>
       
        <Link to='/'><li className='hover:cursor-pointer'>Home</li></Link>
        <Link to='/about'><li className='hover:cursor-pointer'>Contact</li></Link>
        <li className='hover:cursor-pointer'>About</li>
      </ul>
      <ul className='flex flex-row space-x-9 font-extrabold text-2xl'>
        <li>Search</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default Header
