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

    const informationCells = props.informationPairs.map(myPairToStringFunction)

    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
        fontSize: '3vw',
        color: props.headerTextColour,
        fontFamily: props.headerFont
    };

    // RETURN INFORMATION DIV
    return (
        <div className="Information">
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
