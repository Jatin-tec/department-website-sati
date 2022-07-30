import React from "react";
import './style.css';
import contacts from "./contacts";
import Card from "./Card";
import Header from "../../components/Header/Header";

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
 <div>
  <Header />
  <form>
  <h1 className="heading">Attendence of the Students of AIADS</h1>
  
  <table>
  <tr>
    <th>Name</th>
    <th>Enrollment number</th>
    <th>Email</th>
    <th>{today}</th>
    <th>Attendence</th>
  </tr>
  {contacts.map(createCard)}
 
  </table>


 
  <button id="Attendence-submit" type="submit">Submit</button>
  </form>
  </div>

)
}

export default Attendence;