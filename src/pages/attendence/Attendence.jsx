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
  <Container maxWidth='lg'>
 <div>
  <form>
  <h1 className="heading">Attendence of the Students of AIADS</h1>
  <table>
  <tr>
    <th>
    <div className="UserName">Name</div></th>
    <th><div className="UserEnrollment">Enrollment number</div></th>
    <th><div className="UserEmail">Email</div></th>
    <th><div className="Today">{today}</div></th>
    <th><div className="AttendenceData">Total Attendence</div></th>
  </tr>
  {contacts.map(createCard)}
 
  </table>


 
  <button id="Attendence-submit" type="submit">Submit</button>
  </form>
  <SpeedDialTooltipOpen/>
  </div>
</Container>
)
}

export default Attendence;