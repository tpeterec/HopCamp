import React, { useState, useEffect } from "react";
import styles from "./Available_sites.module.css";
import CalenderDate from './CalenderDate'
function Available_sites() {
  const days = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(true);
  const [calender,setCalender] = useState([]);
  useEffect(() => {
    const now = new Date();
    const datesInMonth= new Date(now.getFullYear(),now.getMonth()+1, 0).getDate();
    const firstDay =  now.getDay();
    
    let arr = [];
    for (let i = 0; i < firstDay; i++)  //fill empty slot
    {
      arr.push(null);
    }
    //speicify the length of the array, and mapping, underscore makes it so that we ignore value, and set index.
    arr= arr.concat(Array.from({length:datesInMonth},(_,index)=>index+1)); 
    setCalender(arr)
  },[])


  return (
    <div className={styles.availableSite}>
      <h2 className="fw-bold mb-5">Available sites</h2>
      <div className="row g-3 ">
        <div className="col-md m-0">
          <div
            className="input-group border rounded-3 mb-3"
            role="button"
            id="dateInput"
          >
            <div className="input-group-prepend d-flex">
              <span className="input-group-text bg-white border-0">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
            </div>
            <div className="form-floating" data-bs-toggle="collapse" data-bs-target="#categoryList" aria-expanded="false" aria-controls="categoryList">
              <input
                type="text"
                role="button"
                readOnly
                className="form-control border-0 fw-semibold"
                id="floatingInputGroup1"
                placeholder="Add Date"
              ></input>
              <label
                htmlFor="floatingInputGroup1"
                readOnly
                className="fw-semibold"
              >
                Add Date
              </label>
            </div> 
            
          </div>
        </div>
        <div className="col-md m-0">
          <div className="input-group border rounded-3 mb-3">
            <div className="input-group-prepend d-flex">
              <span className="input-group-text bg-white border-0">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
            </div>
            <div className="form-floating">
              <input
                type="text"
                readOnly
                className="form-control border-0 fw-semibold"
                id="floatingInputGroup1"
                placeholder="Username"
                value="May 15-July 23"
              ></input>
              <label
                htmlFor="floatingInputGroup1"
                className="fw-semibold"
                readOnly
              >
                Add guests
              </label>
            </div>
          </div>
        </div>
      </div>

      
      <div className="collapse" id="categoryList">
              <div className="shadow border-0 position-absolute card card-body">
                <div className=" card card-body">
                  <div id="wrapper" className="d-flex text-center">
                    <div className={styles.tableContainer}>
                      <div className="d-flex justify-content-center">
                        <strong>May 2023</strong>
                      </div>
                      <ul className="d-flex p-0 m-0 mt-2">
                        {days.map(element=>(
                        <small className="m-0 text-secondary pt-2" style={{width:'40px'}}>{element}</small>
                      ))}
                      </ul>
                      
                      <table>
                      <tbody className="d-flex flex-wrap">
                        {calender.map((date,index)=>(
                          <CalenderDate date={date} key={index}/>
                        ))}
                      </tbody>
                    </table>
                    </div>
                    
                    <div className={styles.tableContainer}>
                      <strong>June 2023</strong>
                      
                    </div>

                  </div>
                </div>
                <div className="fw-bold" role="button">Clear</div>
              </div>
            </div>


      <div id='filterElement'>
         <p className="fw-semibold mb-3">Filter by</p>
         <ol className="d-flex gap-3">
            <li className="fw-semibold text-center p-1 ps-3 pe-3 border rounded-5">
              Tent sites
            </li>
            <li className="fw-semibold text-center p-1 ps-3 pe-3 border rounded-5">
              Tent sites
            </li>
         </ol>
      </div>

    

    </div>
  );
}

export default Available_sites;
