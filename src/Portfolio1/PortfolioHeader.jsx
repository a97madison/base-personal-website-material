import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function PortfolioHeader(props) {

    // DEFINE STYLE CONSTANTS 
    const headerTextStyle = {
        color: props.headerTextColour,
        fontFamily: props.headerFont
    };

    // RETURN PROFILEHEADER DIOV
    return (
        <div className="Header">
            {emptyHr}
            {emptyHr}
            <p style={headerTextStyle}> {"PORTFOLIO"} </p>
            {/* HORIZONTAL BREAK LINE */}
            {profileHr}
        </div>
    );
}

export default PortfolioHeader;
