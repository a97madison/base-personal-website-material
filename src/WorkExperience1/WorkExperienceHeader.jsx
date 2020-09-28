import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function WorkExperienceHeader(props) {
    // RETURN PROFILEHEADER DIOV
    return (
        <div className="Header">
            {emptyHr}
            <p> {"WORK EXPERIENCE"} </p>
            {/* HORIZONTAL BREAK LINE */}
            {profileHr}
        </div>
    );
}

export default WorkExperienceHeader;
