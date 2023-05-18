import CalendarDate from "./CalendarDate";
import styles from './Available_sites.module.css'
function Calendar(props){
    const days = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const calendar = props.calendar;
    const calendarNext = props.calendarNext;
    const handleDateSelect = props.handleDateSelect;
    const dateSelected= props.dateSelected;

    return (
        <div className="shadow border-0 position-absolute card card-body d-inline-block" style={{minHeight:'420px'}}>
                <div className=" card card-body" style={{minHeight:'350px'}}>
                  <div id="wrapper" className="d-flex text-center">
                    <div className={styles.tableContainer}>
                      <div className="d-flex justify-content-center">
                        <strong>{calendar[1]+' '+calendar[0]}</strong>
                      </div>
                      <ul className="d-flex p-0 m-0 mt-2">
                        {days.map((element,index)=>(
                        <small className="m-0 text-secondary pt-2" key={index} style={{width:'40px'}} >{element}</small>
                      ))}
                      </ul>
                      
                      <table>
                      <tbody>
                      <tr className="d-flex flex-wrap">
                        {calendar.length===0? null :calendar[2].map((date,index)=>(
                          <CalendarDate date={date} key={index} handleDateSelect={handleDateSelect} currentDate={props.currentDate} month={calendar[1]} year={calendar[0]} target={dateSelected}/>
                        ))}
                      </tr>
                      </tbody>
                    </table>
                    </div>
                    
                    <div className={styles.tableContainer}>
                      <strong>{calendarNext[1]+' '+calendarNext[0]}</strong>
                      <ul className="d-flex p-0 m-0 mt-2">
                        {days.map((element,index)=>(
                        <small className="m-0 text-secondary pt-2" key={index} style={{width:'40px'}} >{element}</small>
                      ))}
                      </ul>
                      <table>
                      <tbody>
                      <tr className="d-flex flex-wrap">
                      {calendarNext.length===0? null :calendarNext[2].map((date,index)=>(
                          <CalendarDate date={date} key={index} handleDateSelect={handleDateSelect} currentDate={props.currentDate} month={calendarNext[1]} year={calendar[0]} target={dateSelected}/>
                        ))}
                      </tr>
                    </tbody>
                    </table>
                    </div>

                  </div>
                </div>
                <div className="d-flex">
                  <div className="fw-bold" role="button" onClick={props.handleClear
                  }>Clear</div>
                </div>
                
                <div className="mt-3 d-flex justify-content-end">
                  <div className="btn btn-outline-dark p-2 ps-4 pe-4">Skip</div>
                </div>
                
              </div>
    )
}
export default Calendar;