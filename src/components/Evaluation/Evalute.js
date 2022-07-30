import React from "react";

function Evalute(props) {
  return (
    
      
      <tr>

      <td className="name">{props.name}</td>
      <td className="enrollment">{props.enrollment}</td>
      <td className="email">{props.email}</td>
      <td className="mid-sem"><input type="number" max={20} ></input></td>
      <td className="mid-sem"><input type="number" max={20} ></input></td>
      <td className="end-sem"><input type="number" max={70} ></input></td>
   
    </tr>
    
  );
}

export default Evalute;
