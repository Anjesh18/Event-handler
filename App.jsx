import { useState } from 'react'

import './App.css'
import NoteContext from './context/NoteContext'
import Header from './components/Header'

function App() {


  return (
 <div>
  <Header/>
  <NoteContext/>
  
 </div>
  )
}

export default App
