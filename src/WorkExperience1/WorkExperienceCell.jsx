import React from 'react';
import {makeButton} from '../GlobalHelpers';

import './WorkExperienceCell.css';
import '../ConstantStyles.css';

function WorkExperienceCell(props) {
    // DEFINE STYLE CONSTANTS
    const weCellStyle = {
      display: "flex",
      flexDirection: "column",
      borderBottom: "0.1vmin solid darkgrey"
    };
    const weCellInfoStyle = {
      display: "flex",
      flexDirection: "row",
      paddingLeft: "5vmin",
      textAlign: "left"
    }
    const logoCityTimeframeStyle = {
      display: "flex",
      flexDirection: "row",
    }
    const cityTimeframeStyle = {
      display: "flex",
      flexDirection: "column",
      width: "15vw"
    };
    const wePageTextStyle = {
      overflowWrap: "normal",
      textAlign: "left",
      marginLeft: "0.1vmin",
      marginTop: "0.2vmin"  
    };

    const pressableObject = makeButton(props.companyName, props.companyLink, "Company");

    function textToObjectFunction(text) {
      return (
        <div style={wePageTextStyle}> {text} </div>
      );
    } 

    const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN WORKEXPERIENCE CELL DIV
  return (
    <div style={weCellStyle} className="Page-text-2">
      <div className="Header-text-3"> {props.companyName} </div>
      <div style={weCellInfoStyle}>
        <div style={cityTimeframeStyle}>
          {pressableObject}
          <div style={wePageTextStyle}> {props.timeframe} </div>
          <div style={wePageTextStyle}> {props.city} </div>
        </div>
        <div>  
          {bulletPointObjects}
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceCell;
