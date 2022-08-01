import { Avatar, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./style.css";
import Announcment from "../../components/Announcment/Announcment";
import Header from "../../components/Header/Header";
import { useParams, useLocation } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";



function CopyToClipboard() {
  /* Get the text field */
  var copyText = "Hello";
  navigator.clipboard.writeText(copyText);
  alert("Copied the text:" + copyText);
}
const Main = () => {

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");

  const params = useParams();

  const handleChange = (e) => {
    if (e.target.files[0]) {
    }
  };


  const location = useLocation();
  console.log(location);
  const classData = location.state;

  return (
    <div className="main">
      <Header />
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {classData.class_name}
              </h1>
              <div className="main__section main__overflow">
                {classData.subject}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>

                <div className="showonhover">  
                    <div className="main__id"><span className="Copy" onClick={CopyToClipboard} style={{ 'display': 'flex'}}><div style={{ marginRight: '4px' }}>{params.code}</div><ContentCopyIcon/></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          <div className="main__status">
            <p>Upcoming</p>
            <p className="main__subText">No work due</p>
          </div>
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                {showInput ? (
                  <div className="main__form">
                    <TextField
                      id="filled-multiline-flexible"
                      multiline
                      label="Announce Something to class"
                      variant="filled"
                      value={inputValue}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="main__buttons">
                      <input
                        onChange={handleChange}
                        variant="outlined"
                        color="primary"
                        type="file"
                      />

                      <div>
                        <Button onClick={() => setShowInput(false)}>
                          Cancel
                        </Button>

                        <Button
                          onClick={() => {}}
                          color="primary"
                          variant="contained"
                        >
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main__wrapper100"
                    onClick={() => setShowInput(true)}
                  >
                    <Avatar />
                    <div>Announce Something to class</div>
                  </div>
                )}
              </div>
            </div>
            <Announcment classData={'classData'} />
          </div>
        </div>
      </div>
      <SpeedDialTooltipOpen />
    </div>
  );
};

export default Main;
