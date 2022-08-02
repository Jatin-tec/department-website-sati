import { Avatar, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./style.css";
import Announcment from "../../components/Announcment/Announcment";
import Header from "../../components/Header/Header";
import { useParams, useLocation } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import { connect } from "react-redux";
import { updateHeaderTitle } from "../../store/actions/headerActionState";
import Container from '@mui/material/Container';
import CropFreeIcon from '@mui/icons-material/CropFree';
function CopyToClipboard() {
  /* Get the text field */
  var copyText = "Hello";
  navigator.clipboard.writeText(copyText);
  alert("Copied the text:" + copyText);
}

const pages = [
  {
    title: 'Classes',
    path: '/classes'
  },
  {
    title: 'Classwork',
    path: '/classes'
  },
  {
    title: 'People',
    path: '/peoples'
  },
  {
    title: 'Attendence',
    path: '/attendence'
  },
  {
    title: 'Marks',
    path: '/'
  }
];

const Main = (props) => {

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");

  const params = useParams();

  useEffect(() => {
    (async () => {
      props.updateHeader(pages)
    })()
  })

  const handleChange = (e) => {
    if (e.target.files[0]) {
    }
  };


  const location = useLocation();
  console.log(location);
  const classData = location.state;

  return (
    <Container maxWidth="lg">
   <div className="MainCointainer">
    <div className="TopCointainerWrapper">
      <div className="TopCointainer">
        <div className="ImgCointainer"> <div className="Filler"></div> </div>
        <div className="TopCointainerContent">
        <h1 className="TopHeading">class1</h1>
        <div className="Paragraph">detail</div>
        </div>
      </div>
    </div>
    <div className="BottomCointainer">
    <aside className="Shrink">
      <div className="LeftCointainer">
        <div >
          <div className="First">
            <div className="FirstContent"><span class="ClassCode">Class code</span></div>
            <div className="FirstContent">
            <div className="ShowClassCode">
            <html-Blob>
            <span style={{whiteSpace: "pre-wrap"}}>ym24kue</span>
            </html-Blob>
            </div>
            <div className="CopyIcon"><CropFreeIcon/></div>
            </div>
          </div>
        </div>
        <div className="Second">
          <div className="SecondContent">
            <h2>Upcoming</h2>
            <div className="WorkDue">No work due</div>
            <div className="ViewAll">View all</div>
          </div>
        </div>
        
      </div>
    </aside>
    <main className="RightContainer">
        <div className="RightSection">
            <div className="Announcement">
              <div className="main__ancContent">
                {showInput ? (
                  <div className="AnnouncementSection">
                    <TextField
                      id="filled-multiline-flexible"
                      multiline
                      label="Announce Something to class"
                      variant="filled"
                      value={inputValue}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="MainButtons">
                    <div className="LeftButton">
                      <input
                        onChange={handleChange}
                        variant="outlined"
                        color="primary"
                        type="file"
                      />
                      </div>
        <div className="BottomButtons">
                      <div className="AnnouncementButton">
                        
                        
                        <Button onClick={() => setShowInput(false)}>
                          Cancel
                        </Button>

                        <Button
                          onClick={() => { }}
                          color="primary"
                          variant="contained"
                        >
                          Post
                        </Button>
                        
                      </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="AnnouncementContent"
                    onClick={() => setShowInput(true)}
                  >
                   <div className="AnnouncementAvatar"> <Avatar /></div>
                    <div className="AnnouncementText">Announce Something to class</div>
                  </div>
                )}
              </div>
            </div>
            <Announcment classData={'classData'} />
          </div>
          
        </main>
    </div>
   </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeader: (titles) => dispatch(updateHeaderTitle(titles))
  }
}

export default connect(null, mapDispatchToProps)(Main)