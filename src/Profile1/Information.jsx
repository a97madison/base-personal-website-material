import React from 'react';
// import information helpers
import {
  myPairToStringFunction
} from './InformationHelpers';

import "./Information.css";
import '../ConstantStyles.css';

function Information(props) {
  const sectionStyle = props.sectionStyle, sectionParentStyle = props.sectionParentStyle, informationPairs = props.informationPairs;

  const informationCells = informationPairs.map(myPairToStringFunction)
  // RETURN INFORMATION DIV
  return (
    <div style={sectionStyle}>
      <div style={sectionParentStyle} className="Page-text-2">
        <p className="Header-text-2"> {"INFORMATION"} </p>
        <div>
          {informationCells}
        </div>
      </div>
    </div>
  );
}

export default Information;
