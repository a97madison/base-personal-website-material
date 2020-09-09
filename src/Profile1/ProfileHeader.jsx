import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function ProfileHeader(props) {
    // props are: headerIntro, headerFont, pageFont, headerTextColour, pageTextColour
    
    // DEFINE STYLE CONSTANTS 
    const headerTextStyle = {
        fontSize: '4vmin',
        color: props.headerTextColour,
        fontFamily: props.headerFont
    };

    const pageTextStyle = {
        fontSize: '2.5vmin',
        color: props.pageTextColour,
        fontFamily: props.pageFont
      };      

    // RETURN PROFILEHEADER DIOV
    return (
        <div className="Header">
            <p style={headerTextStyle}> {"PROFILE"} </p>
            <p style={pageTextStyle}> {props.headerIntro} </p>
            {profileHr}
        </div>
    );
}

export default ProfileHeader;
