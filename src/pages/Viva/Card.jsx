import React from "react";
var total = 25;

function Card(props) {
  return (
    <tr>
      <td className="name">{props.name}</td>
      <td className="enrollment">{props.enrollment}</td>
      <td className="email">{props.email}</td>
      <td className="attendence-status">
        <input type="radio" id="present" name={`${props.enrollment}`} value="Present" />
        <label htmlFor="Present" className="present">Present</label>
        <input type="radio" id="absent" name={`${props.enrollment}`} value="Absent" />
        <label htmlFor="Absent" className="absent">Absent</label>
        <input type="radio" id="holiday" name={`${props.enrollment}`} value="Holiday" />
        <label htmlFor="Holiday" className="holiday">Holiday</label>
      </td>
      <td>{props.attendence}/{total}</td>
    </tr>
  );
}

export default Card;
