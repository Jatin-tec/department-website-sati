import React from "react";
import Avatar from '@mui/material/Avatar';
var total=25;

function Card(props) {
  return (
    
      
      <tr>
      <td id="AttendenceUsername">
      <div className="Avatar"><Avatar/></div>
      <div className="UsernameData">{props.name}</div></td>
      <td> <div className="enrollment">{props.enrollment}</div></td>
      <td><div className="email">{props.email}</div></td>
      
      <td >
      <div className="attendence-status">
        <input type="radio" id="present" name={`${props.enrollment}`} value="Present"/>
  <label htmlFor="Present" className="present">Present</label>
  <input type="radio" id="absent" name={`${props.enrollment}`} value="Absent"/>
  <label htmlFor="Absent" className="absent">Absent</label>
  <input type="radio" id="holiday" name={`${props.enrollment}`} value="Holiday"/>
  <label htmlFor="Holiday" className="holiday">Holiday</label>
</div>
    </td>
    <td className="AttendenceDataFill"><div className="TotalAttendence">{props.attendence}</div></td>
    </tr>
    
  );
}

export default Card;
