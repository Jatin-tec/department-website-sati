import { Avatar, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import "./style.css";
import Announcment from "../../components/Announcment/Announcment";
import { useParams } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { connect, useSelector } from "react-redux";
import { updateHeaderTitle } from "../../store/actions/headerActionState";

import AssignmentIcon from '@mui/icons-material/Assignment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function CopyToClipboard() {  
  var copyText = "Hello";
  navigator.clipboard.writeText(copyText);
  alert("Copied the text:" + copyText);
}

const Main = (props) => {

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");

  const params = useParams();

  useEffect(() => {
    (async () => {
      const pages = [
        {
          title: 'Stream',
          path: `/stream/${params.code}`
        },
        {
          title: 'Classwork',
          path: `/classes`
        },
        {
          title: 'People',
          path: `/peoples/${params.code}`
        },
        {
          title: 'Attendence',
          path: `/attendence/${params.code}`
        },
        {
          title: 'Marks',
          path: `/evalute/${params.code}`
        }
      ];      
      props.updateHeader(pages)
    })()
  })

  const handleChange = (e) => {
    if (e.target.files[0]) {
    }
  };

  const classData = useSelector(state => state.classReducer.currentClass);

  return (
    <div className="MainCointainer">
      <div className="TopCointainerWrapper">
        <div className="TopCointainer">
          <div className="ImgCointainer"> <div className="Filler"></div> </div>
          <div className="TopCointainerContent">
            <h1 className="TopHeading">{classData.class_name}</h1>
            <div className="Paragraph">{classData.subject}</div>
          </div>
        </div>
      </div>
      <div className="BottomCointainer">
        <aside className="Shrink">
          <div className="LeftCointainer">
            <div >
              <div className="First">
                <div className="FirstContent"><span className="ClassCode">Class code</span></div>
                <div className="FirstContent">
                  <div className="ShowClassCode">
                    <html-Blob>
                      <span style={{ whiteSpace: "pre-wrap" }}>{classData.classroom_code}</span>
                    </html-Blob>
                  </div>
                  <div className="CopyIcon"><ContentCopyIcon /></div>
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

                        <div className="upload">
                          <label for="file-input">
                            <UploadIcon fontSize="medium" />
                          </label>
                          <input id="file-input" type="file" onChange={handleChange} />
                        </div>
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
          <div className="AnnounceData">
            <div className="DataCointainer">
              <div className="AnnounceDataContent">
                <div className="AnnounceAvatar">
                  {/* Add Icon here */}
                  <QuestionMarkIcon />

                </div>
                <div className="DetailedContent">
                  <div className="ContentInAnnouncement">
                    <h2></h2>
                    <div className="UsernameInAnnouncement">
                      <span className="UsernameInAnnouncementcontent">Eyepatch#0701 MereSawaloo ka jawaab do</span>
                    </div>
                  </div>

                </div>
                <div className="DotIcon"><MoreVertIcon /></div>
              </div>
            </div>
          </div>
          <div className="AnnounceData">
            <div className="DataCointainer">
              <div className="AnnounceDataContent">
                <div className="AnnounceAvatar">
                  {/* Add Icon here */}
                  <AssignmentIcon />

                </div>
                <div className="DetailedContent">
                  <div className="ContentInAnnouncement">
                    <h2></h2>
                    <div className="UsernameInAnnouncement">
                      <span className="UsernameInAnnouncementcontent">Eyepatch#0701 posted a new assignment: sss</span>
                    </div>
                  </div>

                </div>
                <div className="DotIcon"><MoreVertIcon /></div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeader: (titles) => dispatch(updateHeaderTitle(titles))
  }
}

export default connect(null, mapDispatchToProps)(Main)