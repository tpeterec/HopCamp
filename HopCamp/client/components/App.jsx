import { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Current_campsite from './Current_campsite/Current_campsite.jsx'
import Available_sites from './Available_sites/Available_sites.jsx'
function App() {

  return (
    <div id='contentWrapper'>
    <div className='header'>
      <h1>Header</h1>
    </div>
 
    <Current_campsite />
    <h1>Photo Gallery</h1>
    <h1>Current Campsite</h1>
    <h1>Camp Info</h1>
    <Available_sites />
    <h1>Tent Sites (plus map)</h1>
    <h1>Camping Location</h1>
    <h1>Location</h1>
    <h1>Hosted by</h1>
    <h1>Camping Spots</h1>
    <h1>Camp Safety</h1>
    <h1>Safety & Partners</h1>
    <h1>Footer</h1>
    </div>
  )
}

export default App
