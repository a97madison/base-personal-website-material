import React from 'react';
import {makePressableObject} from '../GlobalHelpers';
import EducationHeader from './EducationHeader';

import './Education.css';
import '../ConstantStyles.css';

function Education(props) {
  const color1 = props.color1, color2 = props.color2, appHeight = props.appHeight, education = props.educationProps;

  // DEFINE STYLE CONSTANTS
  const educationStyle = {
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    display: "flex",
    flexDirection: "column",
    minHeight: appHeight,
    width: "100vw",
    left: "0px",
    overflowY: "scroll"
  };
  const educationInfoStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "20vw",
    marginBlock: "1vh",
    height: "70vh"
  };
  const educationBulletPointParentStyle = {
    height: "20%",
    display: "table",
    textAlign: "left"
  };
  const educationBulletPointTextStyle = {
    verticalAlign: "middle",
    height: "auto",
    margin: "0px 0px 0px 0px"
  };
  const educationImageParentStyle = {
    paddingInline: "20px"
  };
  const educationBulletPointsStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "1vh 5%"
  };

  function headerFunction(text) {
    return (
      <div className="Education-header">
        <p> {text} </p>
      </div>
    );
  }

  function textToObjectFunction(textObject) {
    const key = textObject[1]
    const text = textObject[0]

    return (
      <div key={key} style={educationBulletPointTextStyle}>
        <p> {text} </p>
      </div>
    );
  }

  const headerObject = headerFunction(education.headerText)
  const bulletPointObjects = education.bulletPointsArray.map(textToObjectFunction);

  const text = ""
  const imageName = "UWaterloo"
  const link = education.schoolLink
  const pressableType = "Education"
  const pressableObject = makePressableObject(text,imageName,link,pressableType)

  // RETURN EDUCATION DIV
  return (
    <div id="education" style={educationStyle}>
      <EducationHeader />

      <div style={educationInfoStyle} className="Page-text-1">
        {headerObject}
        <div className="Education-information">
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
    </div>
  );
}

export default Education;
