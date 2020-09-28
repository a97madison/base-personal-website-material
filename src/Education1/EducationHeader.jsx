import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

function EducationHeader(props) {
    // RETURN EDUCATION HEADER DIV
    return (
        <div className="Header">
            {emptyHr}
            <p> {"EDUCATION"} </p>
            {/* HORIZONTAL BREAK LINE */}
            {profileHr}
        </div>
    );
}

export default EducationHeader;
