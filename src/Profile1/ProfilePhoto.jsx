import React from 'react';
import profilePhoto from '../Images/profilePhoto.png';
import {emptyHr} from '../GlobalConstants';

import './ProfilePhoto.css';

/*
    This section of the profile contains all of the person's personal information that
    they want to display.
*/
function ProfilePhoto(props) {
    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
        fontSize: '3vw',
        color: props.headerTextColour,
        fontFamily: props.headerFont
    };

    const photoHeaderTextStyle = {
        fontSize: headerTextStyle.fontSize,
        color: props.bgColour
    };

    // RETURN PROFILEPHOTO DIV
    return (
        <div className="Profile-photo">
          <p style={photoHeaderTextStyle}> {"PHOTO"} </p>
          <img className="img" src={profilePhoto} alt={props.fullName + "!"}></img>
          {emptyHr}
          {emptyHr}
        </div>
    );
}

export default ProfilePhoto;
