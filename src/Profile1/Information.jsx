import React from 'react';
// import information helpers
import {
    myPairToStringFunction
} from './InformationHelpers';

import "./Information.css";
import '../ConstantStyles.css';

function Information(props) {
    const sectionStyle = props.sectionStyle, sectionParentStyle = props.sectionParentStyle, informationPairs = props.informationPairs;
    
    const informationCellsStyle = {
        textAlign: "left"
    }
    
    const informationCells = informationPairs.map(myPairToStringFunction)
    // RETURN INFORMATION DIV
    return (
        <div style={sectionStyle}>
            <div style={sectionParentStyle} className="Page-text-2">
                <p className="Header-text-2"> {"INFORMATION"} </p>
                <div style={informationCellsStyle}>
                    {informationCells}
                </div>
            </div>
        </div>
    );
}

export default Information;
