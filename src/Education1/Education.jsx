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
    minHeight: appHeight,
    width: "100%",
    left: "0px",
    overflowY: "scroll"
  };
  const educationInfoStyle = {
    marginRight: "20vw",
    display: "flex",
    flexDirection: "row",
  };
  const educationBulletPointParentStyle = {
    height: "25%",
    display: "table",
    textAlign: "left"
  };
  const educationBulletPointTextStyle = {
    display: "table-cell",
    verticalAlign: "middle",
    height: "auto",
    margin: "0px 0px 0px 0px"
  };
  const educationImageParentStyle = {
    position: "relative",
    width: "40%",
    marginTop: "9%"
  };
  const educationBulletPointsStyle = {
    display: "table",
    height: "100%",
    width: "90%",
    margin: "5vh 5% 5vh 5%"
  };

  const pressableObject = makePressableObject("UWaterloo", education.schoolLink, "Education")

  function headerFunction(text) {
    return (
      <div className="Header-text-2">
          <p> {text} </p>
      </div>
    )
  }

  function textToObjectFunction(text) {
    return (
      <div style={educationBulletPointParentStyle}>
        <p style={educationBulletPointTextStyle}>
          {text}
        </p>
      </div>
    );
  }

  const headerObject = headerFunction(education.headerText)
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
            {headerObject}
            {bulletPointObjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
