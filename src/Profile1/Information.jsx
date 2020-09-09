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
        fontSize: '2.5vmin',
        color: props.headerTextColour,
        fontFamily: props.headerFont,
        height: '5vh'
    };

    const textStyle = {
        color: props.pageTextColour
    };

    // RETURN INFORMATION DIV
    return (
        <div className="Information" style={textStyle}>
            <p style={headerTextStyle}> {"INFORMATION"} </p>
            <div className="Scrollable-information">
                <div className = "Scrollable-cells">
                    {informationCells}
                </div>
            </div>
        </div>
    );
}

export default Information;
