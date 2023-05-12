import { useState } from 'react'
import "./App.css"
import Current_campsite from './components/Current_campsite/Current_campsite.jsx'
function App() {

  return (
    <>
    <div className='header'>
      <h1>Header</h1>
    </div>

    <Current_campsite />
    <h1>Photo Gallery</h1>
    <h1>Current Campsite</h1>
    <h1>Camp Info</h1>
    <h1>Available Sites</h1>
    <h1>Tent Sites (plus map)</h1>
    <h1>Camping Location</h1>
    <h1>Location</h1>
    <h1>Hosted by</h1>
    <h1>Camping Spots</h1>
    <h1>Camp Safety</h1>
    <h1>Safety & Partners</h1>
    <h1>Footer</h1>
    </>
  )
}

export default App
