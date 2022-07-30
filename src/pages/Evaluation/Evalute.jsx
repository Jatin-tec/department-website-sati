import React from "react";
import TextField from '@mui/material/TextField';
function Evalute(props) {
  return (
    
      
      <tr>

      <td className="name">{props.name}</td>
      <td className="enrollment">{props.enrollment}</td>
      <td className="email">{props.email}</td>
      <td className="mid-sem">
      <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          />
         </td>
      <td className="mid-sem"><TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          />
         </td>
      <td className="mid-sem"><TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          />
         </td>
      
   
    </tr>
    
  );
}

export default Evalute;
