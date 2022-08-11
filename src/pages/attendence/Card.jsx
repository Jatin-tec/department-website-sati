import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from "@material-ui/core/Button";

function Card(props) {
  const [text, setText] = useState("Mark Present")
  const [colour, changeColour] = useState("primary");
  const [isPresent, toggelPresent] = useState(false);

  useEffect(() => {
    if (isPresent) {
      setText("Mark Absent");
      changeColour("secondary");
    } else {
      setText("Mark Present");
      changeColour("primary");
    }
  }, [isPresent, props])

  const handleChange = (event) => {
    toggelPresent(!isPresent);
  };

  return (
    <tr>
      <td id="AttendenceUsername">
        <div className="Avatar"><Avatar /></div>
        <div className="UsernameData">{props.user.first_name}</div></td>
      <td className="Mobile"> <div className="enrollment">{props.enrollment_no}</div></td>
      <td className="DisplayNone"><div className="email">{props.user.email}</div></td>

      <td className="Buttons-Attendence">
        <div className="attendence-status">
          <Button onClick={handleChange} variant="contained" color={colour}>
            {text}
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default Card;
