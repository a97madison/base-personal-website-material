import React from 'react';
import profilePhoto from '../Images/profilePhoto.png';
import {emptyHr} from '../GlobalConstants';

import './ProfilePhoto.css';

/*
    This section of the profile contains all of the person's personal information that
    they want to display.
*/
function ProfilePhoto(props) {
    // props are: bgColour

    // RETURN PROFILEPHOTO DIV
    return (
        <div className="Profile-photo">
          <img className="Profile-img" src={profilePhoto} alt={props.fullName + "!"}></img>
          {emptyHr}
          {emptyHr}
        </div>
    );
}

export default ProfilePhoto;
