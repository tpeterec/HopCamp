import React, { useState, useEffect } from "react";
import styles from "./Available_sites.module.css";
function Available_sites() {
  return (
    <div id="availableSite">
      <h2 className="fw-bold mb-5">Available sites</h2>
      <div className="row g-3 ">
        <div className="col-md m-0">
         
          <form className="form-floating">
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className={`position-absolute ${styles.top40} ms-3`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>            
            <input
              role="button"
              readOnly
              className="form-control ps-5 fw-semibold"
              type="text"
              id="floatingInput"
              value="May 15-June 16"
            >
              
            </input>

            <label htmlFor="floatingInput" className={`text-secondary-emphasis fw-semibold ps-5 `}>Add dates</label>
            
          </form>
        </div>
         <div className="col-md m-0">
         
          <form className="form-floating position-relative">
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className={`position-absolute ${styles.top40} ms-3`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
            
            <input
              role="button"
              readOnly
              className="form-control ps-5 fw-semibold"
              type="text"
              id="floatingInput"
              value="1 Guest"
            >
              
            </input>

            <label htmlFor="floatingInput" className="text-secondary-emphasis fw-semibold ps-5">Guests</label>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Available_sites;
