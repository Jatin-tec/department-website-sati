import React, { useEffect } from "react";
import './style.css';

import { updateHeaderTitle } from "../../store/actions/headerActionState";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import { connect, useSelector } from "react-redux";
import Card from "./Card";


const date = new Date();
var today = "Take attendence of " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

function createCard(student) {
  return <Card
    key={student.user.email}
    {...student}
  />
}

function Attendence(props) {

  useEffect(() => {
  }, [])

  const students = useSelector(state => state.classReducer.currentClass.students);

  return (

    <div className="MainCointainer">
      <form>
        <h2 className="heading">Attendence of the Students of AIADS</h2>
        <table className="Attendencetable">
          <tr className="TR-Background">
            <th>
              <div className="UserName">Name</div></th>
            <th className="Mobile"><div className="UserEnrollment">Enrollment number</div></th>
            <th className="DisplayNone"><div className="UserEmail">Email</div></th>
            <th className="Mobile-Display"><div className="Today">{today}</div></th>

          </tr>
          {students && students.map(createCard)}
        </table>
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