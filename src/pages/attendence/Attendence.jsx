import React from "react";
import './style.css';
import contacts from "./contacts";
import Card from "./Card";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown"
import Container from '@mui/material/Container';


const date = new Date();
var today="Take attendence of "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

function createCard(contacts){
  return <Card
  key={contacts.enrollment}
  name={contacts.name}
    enrollment={contacts.enrollment}
    email={contacts.email}
    attendence={contacts.attendence}
    id={contacts.id}
  />
}

function Attendence(){
return(
  
 <div className="MainCointainer">
  <form>
  <h2 className="heading">Attendence of the Students of AIADS</h2>
  <table>
  <tr>
    <th>
    <div className="UserName">Name</div></th>
    <th className="Mobile"><div className="UserEnrollment">Enrollment number</div></th>
    <th className="DisplayNone"><div className="UserEmail">Email</div></th>
    <th className="Mobile-Display"><div className="Today">{today}</div></th>
    <th className="DisplayNone"><div className="AttendenceData">Total Attendence</div></th>
  </tr>
  {contacts.map(createCard)}
 
  </table>


 <div className="AttendenceSubmitButton">
  <button id="Attendence-submit" type="submit">Submit</button>
  </div>
  
  </form>
  
  <SpeedDialTooltipOpen/>
  
  </div>

)
}

export default Attendence;