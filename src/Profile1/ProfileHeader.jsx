import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';
import {headerTextStyle, pageTextStyle} from './Profile';

/*
    This section of the profile is the header. Short sentence about self.
*/
function ProfileHeader(props) {

    // style for Profile's Header section div
    const profileHeaderStyle = {
        margin: '0px 10px 0px 10px',
        // border: '3px solid black',
    };

    return (
        <div className="Profile-header" style={profileHeaderStyle}>
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
