import React, {useState} from 'react';
import './Host.css'
import 'bootstrap/dist/css/bootstrap.css';

function Host(){
    return (
     <div className="host-info-container">
        <div className="container-container">
         <div className="host-pic">
                <img alt="Avatar" src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,h_80,w_80/v1475217800/profile/pdmfuoeafxiturx4dgrz.jpg"className="img-circle"/>
                </div>
             <div className="hosted-by">Hosted by John & Lesley B.</div>
             <div className='since'>Joined in October 2015</div>
                <button className="contact">Contact Host</button>
        </div>
     </div>
  
    );
}

export default Host;