import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function CompanyHeader(props) {

    // DEFINE STYLE CONSTANTS 
    const headerTextStyle = {
        fontSize: '4vmin',
        color: props.headerTextColour,
        fontFamily: props.headerFont,
    };

    // RETURN COMPANY HEADER DIV
    return (
        <div className="Header">
            {emptyHr}
            <p style={headerTextStyle}> {"COMPANY"} </p>
        </div>
    );
}

export default CompanyHeader;
