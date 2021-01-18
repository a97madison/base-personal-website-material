import React from 'react';
import {makePressableObject, textToObjectFunction} from '../GlobalHelpers';

import * as Constants from '../JsxConstants';

import './Portfolio.scss';
import '../ConstantStyles.scss';

function PortfolioCell(props) {

  const text = Constants.emptyText;
  const imageName = props.title;
  const link = props.projectLink;
  const pressableType = Constants.cellPressableType;
  const pressableObject = makePressableObject(text,imageName,link,pressableType);

  function textToLinkFunction(textObject) {
    const key = textObject[1]
    const text = textObject[0]
    return (
      <p key={key} className="porfolio-bullet-points">
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
    <div className="portfolio-cell">
      <div className="header-text-3">
        <div> {projectInfoText1} </div>
        <div className="cell-header-info-text"> {projectInfoText2} </div>
      </div>
      <div className="cell-info">
        <div className="cell-icon-container">
          {pressableObject}
        </div>
        <div className="cell-bullet-points-container">
          <div className="cell-bull-points">
            {bulletPointObjects}
            {linkObjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCell;
