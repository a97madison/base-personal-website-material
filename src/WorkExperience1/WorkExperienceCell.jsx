import React from 'react';
import {makePressableObject} from '../GlobalHelpers';

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
    const weBulletPointParentStyle = {
      display: "table",
      textAlign: "left"
    };
    const weBulletPointTextStyle = {
      display: "table-cell",
      verticalAlign: "middle",
      margin: "0px 0px 0px 0px"
    };
    const weBulletPointsStyle = {
      display: "table",
      height: "100%", 
    }

    const pressableObject = makePressableObject(props.companyName, props.companyLink, "Company");

    function textToObjectFunction(text) {
      return (
        <div style={weBulletPointParentStyle}>
          <div style={weBulletPointTextStyle}> {text} </div>
        </div>
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
        <div style={weBulletPointsStyle}> 
          {bulletPointObjects}
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceCell;
