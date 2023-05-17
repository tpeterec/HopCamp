function CalenderDate(props){
    return (
    <>
    {props.date ? <td className="border border-secondary-subtle">{props.date}</td> : <td></td>}
    </>
            
    
    );
}
export default CalenderDate