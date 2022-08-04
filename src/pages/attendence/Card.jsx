import React from "react";
import Avatar from '@mui/material/Avatar';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
var total=25;

function Card(props) {
  const [Present, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
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
      <FormControl sx={{ maxWidth:'xs' }} primary>
        <InputLabel id="demo-simple-select-error-label">Present</InputLabel>
        <Select value={Present} label="Present" onChange={handleChange}>
          <MenuItem value={10}>Present</MenuItem>
          <MenuItem value={20}>Absent</MenuItem>
        </Select>
      </FormControl>
</div>
    </td>
   
    </tr>
    
  );
}

export default Card;
