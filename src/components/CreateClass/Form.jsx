import React, { useState } from "react";
import {
  Button,
  DialogActions,
  TextField
} from "@material-ui/core";
import { v4 as uuidV4 } from "uuid";
import { createClass } from "../../store/actions/classActions";
import { connect } from 'react-redux'

const Form = () => {
  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

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
        <TextField
          id="filled-basic"
          label="Subject"
          className="form__input"
          variant="filled"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Room"
          className="form__input"
          variant="filled"
          value={Room}
          onChange={(e) => setRoom(e.target.value)}
        />
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

