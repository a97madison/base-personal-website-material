import React from 'react';
// import style constants
import {emptyHr, profileHr} from '../GlobalConstants';

import '../ConstantStyles.css';

function CompanyHeader(props) {
    // RETURN COMPANY HEADER DIV
    return (
        <div className="Header">
            {emptyHr}
            <p> {"COMPANY"} </p>
            {/* HORIZONTAL BREAK LINE */}
            {profileHr}
        </div>
    );
}

export default CompanyHeader;
