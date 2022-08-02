import React from "react";
import contacts from "../attendence/contacts";
import Print from "./Print";
import Evalute from "./Evalute";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown"
function CreateTable(contacts) {
  return <Evalute
    key={contacts.enrollment}
    name={contacts.name}
    enrollment={contacts.enrollment}
    email={contacts.email}
    attendence={contacts.attendence}
    id={contacts.id}
  />
}

function Evalution() {
  return <div>
    <h1 className="heading">Yearly Performance</h1>

    <table>
      <tr>
        <th>Name</th>
        <th>Enrollment number</th>
        <th>Email</th>

        <th>Mid-Sem-1</th>
        <th>Mid-Sem-2</th>
        <th>End-Sem</th>
      </tr>
      {contacts.map(CreateTable)}

    </table>


    <form>
      <button id="Attendence-submit" type="submit">Submit</button></form>
    <SpeedDialTooltipOpen />
  </div>
}


export default Evalution;