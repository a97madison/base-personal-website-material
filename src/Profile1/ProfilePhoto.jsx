import React from 'react';
import profilePhoto from '../Images/profilePhoto.png';
// import style constants
import {profilePhotoStyle, imgStyle} from './StyleConstants';
import {emptyHr} from '../GlobalConstants';
import {headerTextStyle} from './Profile';

/*
    This section of the profile contains all of the person's personal information that
    they want to display.
*/
function ProfilePhoto(props) {

    const photoHeaderTextStyle = {
        fontSize: headerTextStyle.fontSize,
        color: props.bgColour
    };

    return (
        <div className="Profile-photo" style={profilePhotoStyle}>
          <p style={photoHeaderTextStyle}> {"PHOTO"} </p>
          <img src={profilePhoto} style={imgStyle} alt={props.fullName + "!"}></img>
          {emptyHr}
          {emptyHr}
        </div>
    );
}

export default ProfilePhoto;
