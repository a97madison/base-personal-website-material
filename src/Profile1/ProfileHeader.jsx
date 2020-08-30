import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import './ProfileHeader.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function ProfileHeader(props) {

    // DEFINE STYLE CONSTANTS 
    const headerTextStyle = {
        fontSize: '3vw',
        color: props.headerTextColour,
        fontFamily: props.headerFont
    };

    const pageTextStyle = {
        fontSize: '1.5vw',
        color: props.pageTextColour,
        fontFamily: props.pageFont
      };      

    // RETURN PROFILEHEADER DIOV
    return (
        <div className="Profile-header">
            <p style={headerTextStyle}> {"PROFILE"} </p>
            <p style={pageTextStyle}> {props.headerIntro} </p>
            {/* HORIZONTAL BREAK LINE */}
            {emptyHr}
            {profileHr}
            {emptyHr}
            {emptyHr}
        </div>
    );
}

export default ProfileHeader;
