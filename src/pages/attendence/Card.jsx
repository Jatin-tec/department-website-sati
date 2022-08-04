import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from "@material-ui/core/Button";
var ispresent=false;

 

function Card(props) {
  var [text,ChangeText]=React.useState("Present")
  
  if (ispresent){
    text="Present";
  }else{
    text="Absent"
  }
  const [colour, ChangeColour] = React.useState("primary");

  const handleChange = (event) => {
    ispresent=!ispresent;
    ChangeColour("secondary");
  };
  return (
    
      
      <tr>
      <td id="AttendenceUsername">
      <div className="Avatar"><Avatar/></div>
      <div className="UsernameData">{props.name}</div></td>
      <td className="Mobile"> <div className="enrollment">{props.enrollment}</div></td>
      <td className="DisplayNone"><div className="email">{props.email}</div></td>
      
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
