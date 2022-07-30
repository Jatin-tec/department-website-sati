import { Avatar } from "@material-ui/core";
import { FolderOpen, PermContactCalendar } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from 'react-router-dom';

const JoinedClasses = ({ classData }) => {

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/detailed-class/${classData.classroom_code}`, {
      state: { ...classData }
    })
  }

  return (
    <div className="span">
      <li className="joined__list">
        <div className="joined__wrapper">
          <div className="joined__container">
            <div className="joined__imgWrapper" />
            <div className="joined__image" />
            <div className="joined__content">
                <h2 className="joined__title" onClick={redirect}>{classData.class_name}</h2>
              <p className="joined__owner">{classData.faculty_email}</p>
            </div>
          </div>
          <Avatar
            className="joined__avatar"
            src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg"
          />
        </div>
        <div className="joined__bottom">
          <PermContactCalendar />
          <FolderOpen />
        </div>
      </li>
    </div>
  );
};

export default JoinedClasses;
