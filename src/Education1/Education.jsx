import React from 'react';
import {makePressableObject} from '../GlobalHelpers';
import EducationHeader from './EducationHeader';

import './Education.css';
import '../ConstantStyles.css';

function Education(props) {
  const color1 = props.color1, color2 = props.color2, appHeight = props.appHeight, education = props.educationProps;

  // DEFINE STYLE CONSTANTS
  const educationStyle = {
    background: color1,
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    display: "flex",
    flexDirection: "column",
    height: appHeight,
    width: "100%",
    left: "0px"
  };
  const educationInfoStyle = {
    marginRight: "20vw",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    top: "0px",
    bottom: "0px"
  };
  const educationBulletPointParentStyle = {
    height: "25%",
    display: "table",
    textAlign: "left"
  };
  const educationBulletPointTextStyle = {
    display: "table-cell",
    verticalAlign: "middle",
    margin: "0px 0px 0px 0px"
  };
  const educationImageParentStyle = {
    position: "relative",
    width: "40%"
  };
  const educationBulletPointsStyle = {
    display: "table",
    height: "100%",
    width: "50vw"
  };

  const pressableObject = makePressableObject("UWaterloo", education.schoolLink, "Education")

  function textToObjectFunction(text) {
    return (
      <div style={educationBulletPointParentStyle}>
        <p style={educationBulletPointTextStyle}>
          {text}
        </p>
      </div>
    );
  }

  const bulletPointObjects = education.bulletPointsArray.map(textToObjectFunction);

  // RETURN EDUCATION DIV
  return (
    <div id="education" style={educationStyle}>
      <EducationHeader />

      <div style={educationInfoStyle} className="Page-text-1">
        <div style={educationImageParentStyle}>
          {pressableObject}
        </div>
        <div>
          <div style={educationBulletPointsStyle}>
            {bulletPointObjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
