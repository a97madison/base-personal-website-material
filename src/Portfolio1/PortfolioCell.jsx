import React from 'react';
import {makePressableObject} from '../GlobalHelpers';

import './PortfolioCell.css';
import '../ConstantStyles.css';

function PortfolioCell(props) {
  // DEFINE STYLE CONSTANTS
  const portCellStyle = {
    display: "flex",
    flexDirection: "column",
    borderBottom: "0.1vmin solid darkgrey"
  };
  const gifDateBulletPointsStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "5vmin"
  };
  const gifDateStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    width: "15vw"
  };
  const portBulletPointsStyle = {
    overflowWrap: "normal",
    margin: "0px 0px 0px 0px",
    textAlign: "left",
    width: "55vw"
  };
    const pressableObject = makePressableObject(props.title, props.projectLink, "Project");

    function textToObjectFunction(text) {
      return (
        <p style={portBulletPointsStyle}> {text} </p>
      );
    }

    function textToLinkFunction(text) {
      return (
        <p style={portBulletPointsStyle}>
          {"● "}
          <a href={text}> {text} </a>
        </p>
      )
    }

    const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);
    const linkObjects = props.linksArray.map(textToLinkFunction);

  // RETURN PORTFOLIO CELL DIV
  return (
    <div style={portCellStyle} className="Page-text-2">
      <div className="Header-text-3"> {props.title} </div>

      <div style={gifDateBulletPointsStyle}>
        <div style={gifDateStyle}>
          {pressableObject}
          <div className="Page-text-2"> {props.time} </div>
        </div>
        <div>
          {bulletPointObjects}
          {linkObjects}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCell;
