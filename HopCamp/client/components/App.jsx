import { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Current_campsite from './Current_campsite/Current_campsite.jsx'
import Available_sites from './Available_sites/Available_sites.jsx'
import Header from "./Header/Header.jsx";
import Ratings from "./Ratings/Ratings";
import Camping_spots from "./Camping_spots/Camping_spots";
import Photo_gallery from './Photo_gallery/Photo_gallery';
import Tent_site from './Tent_site/Tent_site';
import Camping_Location from './Camping_Location/Camping_Location.jsx';
import Host from './Host/Host';
import Safety_Partners from './Safety_Partners/Safety_Partners.jsx';
import ThingsNearby from './Things_Nearby/ThingsNearby.jsx';

function App() {
  const handleClick=(event)=>{
    const popUpCalender = document.getElementById('categoryList');
    if (popUpCalender && !popUpCalender.contains(event.target))
      if (popUpCalender.classList.contains('show'))
        popUpCalender.classList.toggle('show')
  }


  return (
    <>
      <div>
        <Header />
      </div>
      <div id='contentWrapper' onClick={handleClick}>
      <Current_campsite />
      <Photo_gallery />
      <h1>Current Campsite (Chris)</h1>
      <h1>Camp Info (Chris)</h1>
      <Available_sites />
      <Tent_site />
      <Camping_Location />
      <Host/>
      <div>
        <Ratings />
      </div>
      <h1>Things To Do Nearby (Dan)</h1>
      {/* <ThingsNearby /> */}
      <div>
        <Camping_spots />
      </div>
      <h1>Camp Safety (Dennis)</h1>
      <div>
        <Safety_Partners />
      </div>
      <h1>Footer (Chris)</h1>
    </div></>
  )
}

export default App
