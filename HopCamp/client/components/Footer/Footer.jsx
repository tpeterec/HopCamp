import React from 'react'
import hopcamplogo from "../../assets/hopcamp.svg"
import './Footer.css'
const Footer = () => {
  return (
    <div id='footer'>
    <div className="header-logo mb-5">
      <img src={hopcamplogo} alt='Hopcamp logo'/>
    </div>
    <div className='d-flex' >
      <div className="aboutUsContainer" style={{color: 'rgb(40, 64, 12)'}}>
        <h5 className='fw-bold'>About us</h5>
        <h5 >Careers</h5>
        <h5>Journal</h5>
        <h5>Gift Cards</h5>
        <h5>Contact</h5>
        <h5>Hopcamper FAQ</h5>
      </div>
      <div className="hoistingContainer">

      </div>
      <div className="informContainer">

      </div>
    </div>
    </div>
  )
}

export default Footer