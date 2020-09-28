import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function PortfolioHeader(props) {

    // RETURN PROFILEHEADER DIOV
    return (
        <div className="Header">
            {emptyHr}
            <p> {"PORTFOLIO"} </p>
            {/* HORIZONTAL BREAK LINE */}
            {profileHr}
        </div>
    );
}

export default PortfolioHeader;
