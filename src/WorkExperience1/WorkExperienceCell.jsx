import React from 'react';
import {makePressableObject, textToObjectFunction} from '../GlobalHelpers';

import '../ConstantStyles.css';

function WorkExperienceCell(props) {
  // DEFINE STYLE CONSTANTS
  const weCellStyle = {
    display: "flex",
    paddingBottom: "5px",
    flexDirection: "column",
    borderBottom: "0.1vmin solid darkgrey"
  };
  const weCellNameStyle = {
    // fontFamily: 'ModestoW01-Open',
  }

  const text = ""
  const imageName =  props.companyName
  const link = props.companyLink
  const pressableType = "Cell"
  const pressableObject = makePressableObject(text,imageName,link,pressableType)

  const companyInfoText1 = props.companyName
  const companyInfoText2 = "(" + props.city + " | " + props.timeframe + ")"

  const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN WORKEXPERIENCE CELL DIV
  return (
    <div key={props.companyName} style={weCellStyle} className="Page-text-2">
      <div className="Header-text-3">
        <div style={weCellNameStyle}> {companyInfoText1} </div>
        <div className="Cell-header-info-text"> {companyInfoText2} </div>
      </div>
      <div className="Cell-info">
        <div className="Cell-icon-container">
          {pressableObject}
        </div>
        <div className="Cell-bullet-points-container">
        <div className="Cell-bull-points">
            {bulletPointObjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceCell;
