import React from 'react'
import Header from '../components/Header'
import { eventList } from '../data/EventDatabse'
import Card from '../components/Card'
function Home() {
   const renderCardEvents=()=>{ return eventList.map(({id,date,location,img,heading})=>{
        return <div>
           <Card 
           key={id}
           date={date}
           location={location}
           img={img}
           heading={heading}/></div>
    })
}
  return (
    <div>
        <Header/>
        <div className='flex flex-row justify-between align-center space-x-11'>
        {eventList.length>0? renderCardEvents() : <p>No events available</p>}
        </div>
    </div>
  )
}

export default Home
