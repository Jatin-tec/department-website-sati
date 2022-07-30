import React, { useState } from "react";
import { 
  Button, 
  DialogActions, 
  TextField } from "@material-ui/core";
import { v4 as uuidV4 } from "uuid";
import MenuItem from '@mui/material/MenuItem';

const Roles = [
  {
    value: 'ADA',
    label: 'ADA',
  },
  {
    value: 'ML',
    label: 'ML',
  },
  {
    value: 'Opereating system',
    label: 'Opereating system',
  },
];

const Branches = [
  {
    value: 'Computer science and Engeenering',
    label: 'Computer science and Engeenering',
  },
  {
    value: 'Artificial intelligence and data science',
    label: 'Artificial intelligence and data science',
  },
  {
    value: 'Electronics and communication',
    label: 'Electronics and communication',
  },
  {
    value: 'Mechanical Engeenering',
    label: 'Mechanical Engeenering',
  },
  {
    value: 'Civil Engeenering',
    label: 'Civil Engeenering',
  },
  {
    value: 'Internet of things',
    label: 'Internet of things',
  },
  {
    value: 'Electrical Engeenering',
    label: 'Electrical Engeenering',
  },
  {
    value: 'Electrical instrumentation',
    label: 'Electrical instrumentation',
  },
  {
    value: 'CSEITCS',
    label: 'CSEITCS',
  },
];

const Form = () => {
  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");
  const [Role, setRole] = React.useState('Student');
  
  const [Branch, setBranch] = React.useState('Student');

  const WhileChange = (event) => {
    setBranch(event.target.value);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const addClass = (e) => {
    e.preventDefault();
    const id = uuidV4();

  };

  return (
    <div className="form">
      <p className="class__title">Create Class</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Class Name (required)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Section"
          className="form__input"
          variant="filled"
          value={Section}
          onChange={(e) => setSection(e.target.value)}
        />
        <div class="Role">
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={Role}
          onChange={handleChange}
          helperText="Please select your Subject"
          variant="filled"
        >
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </div>
        
        <div class="Branch">
        <TextField
          id="filled-select-currency"
          select
          label="Branch"
          value={Branch}
          onChange={handleChange}
          helperText="Please select your Branch"
          variant="filled"
        >
          {Branches.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </div>
        
      </div>
      <DialogActions>
        <Button onClick={addClass} color="primary">
          Create
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;
