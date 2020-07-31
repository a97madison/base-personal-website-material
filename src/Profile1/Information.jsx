import React from 'react';
// import style constants
import {
    informationStyle, 
    scrollableInformationStyle, 
    scrollableCellsStyle
} from './StyleConstants';
import {headerTextStyle} from './Profile';
// import information helpers
import {
    myPairToStringFunction
} from './InformationHelpers';

/*
    This section of the profile contains all of the person's personal information that
    they want to display.
*/
function Information(props) {

    const informationCells = props.informationPairs.map(myPairToStringFunction)

    return (
        <div className="Information" style={informationStyle}>
            <p style={headerTextStyle}> {"INFORMATION"} </p>
            <div className="Information-scrollable" style={scrollableInformationStyle}>
                <div className = "Scrollable-cells" style={scrollableCellsStyle}>
                    {informationCells}
                </div>
            </div>
        </div>
    );
}

export default Information;
