import React from 'react';
import {makePressableObject, textToObjectFunction} from '../GlobalHelpers';

import './WorkExperience.scss';
import '../ConstantStyles.scss';

function WorkExperienceCell(props) {

  const text = ""
  const imageName =  props.companyName
  const link = props.companyLink
  const pressableType = "cell"
  const pressableObject = makePressableObject(text,imageName,link,pressableType)

  const companyInfoText1 = props.companyName
  const companyInfoText2 = "(" + props.city + " | " + props.timeframe + ")"

  const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN WORKEXPERIENCE CELL DIV
  return (
    <div key={props.companyName} className="work-experience-cell">
      <div className="header-text-3">
        <div> {companyInfoText1} </div>
        <div className="cell-header-info-text"> {companyInfoText2} </div>
      </div>
      <div className="cell-info">
        <div className="cell-icon-container">
          {pressableObject}
        </div>
        <div className="cell-bullet-points-container">
        <div className="cell-bullet-points">
            {bulletPointObjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceCell;
