import React from 'react';
import {makePressableObject, textToObjectFunction} from '../GlobalHelpers';

import '../ConstantStyles.css';

function PortfolioCell(props) {
  // DEFINE STYLE CONSTANTS
  const portCellStyle = {
    display: "flex",
    paddingBottom: "5px",
    flexDirection: "column",
    borderBottom: "0.1vmin solid darkgrey"
  };
  const portBulletPointsStyle = {
    overflowWrap: "normal",
    margin: "0px 0px 0px 0px",
    textAlign: "left",
  };

  const text = ""
  const imageName = props.title
  const link = props.projectLink
  const pressableType = "Cell"
  const pressableObject = makePressableObject(text,imageName,link,pressableType)

  function textToLinkFunction(textObject) {
    const key = textObject[1]
    const text = textObject[0]
    return (
      <p key={key} style={portBulletPointsStyle}>
        {"● "}
        <a href={text}> {text} </a>
      </p>
    )
  }

  const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);
  const linkObjects = props.linksArray.map(textToLinkFunction);

  const projectInfoText1 = props.title
  const projectInfoText2 = "(" + props.time + ")"

  // RETURN PORTFOLIO CELL DIV
  return (
    <div style={portCellStyle} className="Page-text-2">
      <div className="Header-text-3">
        <div> {projectInfoText1} </div>
        <div className="Cell-header-info-text"> {projectInfoText2} </div>
      </div>
      <div className="Cell-info">
        <div className="Cell-icon-container">
          {pressableObject}
        </div>
        <div className="Cell-bullet-points-container">
          <div className="Cell-bull-points">
            {bulletPointObjects}
            {linkObjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCell;
