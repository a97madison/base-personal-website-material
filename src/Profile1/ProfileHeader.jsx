import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

/*
    This section of the profile is the header. Short sentence about self.
*/
function ProfileHeader(props) {
    // RETURN PROFILEHEADER DIOV
    return (
        <div className="Header">
            {emptyHr}
            <p> {"PROFILE"} </p>
            {profileHr}
        </div>
    );
}

export default ProfileHeader;
