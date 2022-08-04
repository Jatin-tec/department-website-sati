import React, { useEffect } from "react";
import './style.css';
import contacts from "./contacts";
import Card from "./Card";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown"
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateHeaderTitle } from "../../store/actions/headerActionState";


const date = new Date();
var today = "Take attendence of " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

function createCard(contacts) {
  return <Card
    key={contacts.enrollment}
    name={contacts.name}
    enrollment={contacts.enrollment}
    email={contacts.email}
    attendence={contacts.attendence}
    id={contacts.id}
  />
}

function Attendence(props) {

  const params = useParams();

  useEffect(() => {
    (async () => {
      const pages = [
        {
          title: 'Stream',
          path: `/stream/${params.code}`
        },
        {
          title: 'Classwork',
          path: `/classes`
        },
        {
          title: 'People',
          path: `/peoples/${params.code}`
        },
        {
          title: 'Attendence',
          path: `/attendence/${params.code}`
        },
        {
          title: 'Marks',
          path: `/evalute/${params.code}`
        }
      ];      
      props.updateHeader(pages)
    })()
  })

  return (

    <div className="MainCointainer">
      <form>
        <h2 className="heading">Attendence of the Students of AIADS</h2>
        <table className="Attendencetable">
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

      <SpeedDialTooltipOpen />

    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeader: (titles) => dispatch(updateHeaderTitle(titles))
  }
}

export default connect(null, mapDispatchToProps)(Attendence);