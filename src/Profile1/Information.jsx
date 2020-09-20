import React from 'react';
// import information helpers
import {
    myPairToStringFunction
} from './InformationHelpers';

import './Information.css';

/*
    This section of the profile contains all of the person's personal information that
    they want to display.
*/
function Information(props) {
    // props are: informationPairs, headerFont, pageFont, headerTextColour, pageTextColour

    const informationCells = props.informationPairs.map(myPairToStringFunction)

    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
        color: props.headerTextColour,
        fontFamily: props.headerFont,
    };

    const textStyle = {
        color: props.pageTextColour
    };

    // RETURN INFORMATION DIV
    return (
        <div className="Information" style={textStyle}>
            <p className="Profile-sections-header-text" style={headerTextStyle}> {"INFORMATION"} </p>
            <div className="Scrollable-information">
                {informationCells}
            </div>
        </div>
    );
}

export default Information;
