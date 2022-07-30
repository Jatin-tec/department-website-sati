import React, { useState } from "react";
import {
  Button,
  DialogActions,
  TextField
} from "@material-ui/core";
import { v4 as uuidV4 } from "uuid";
import { createClass } from "../../store/actions/classActions";
import { connect } from 'react-redux'
import MenuItem from '@mui/material/MenuItem';

const subjects = [
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

const branches = [
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

  const [subject, setSubject] = useState(subjects[0].value);
  const [branch, setBranch] = useState(branches[0].value);

  const WhileChange = (event) => {
    setBranch(event.target.value);
  };

  const handleChange = (event) => {
    // setRole(event.target.value);
  };
  
  const handleSubject = (e) => {
    setSubject(e.target.value);
  }

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
            value={subject}
            onChange={handleSubject}
            helperText="Please select your Subject"
            variant="filled"
          >
            {subjects.map((option) => (
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
            value={branch}
            onChange={handleChange}
            helperText="Please select your Branch"
            variant="filled"
          >
            {branches.map((option) => (
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


const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createClass: (classAbout) => dispatch(createClass(classAbout))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

