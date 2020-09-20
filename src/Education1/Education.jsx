import React from 'react';
import Uwaterloo from '../Images/UWaterloo.jpg';
import EducationHeader from './EducationHeader';

import './Education.css';

/*
    This section of the website will be the main page.
*/
function Education(props) {
  let education = props.educationProps;

  // DEFINE STYLE CONSTANTS
  const pageTextStyle = {
    color: props.headerTextColour,
    fontFamily: props.pageFont,
  };

  const bulletPointTextStyle = {
    color: props.pageTextColour,
    fontFamily: props.pageFont,
  };

  function iconOnClick() {
    window.open(education.schoolLink);
  }

  function textToObjectFunction(text) {
    return (
      <p className="Education-bullet-point-text" style={bulletPointTextStyle}> {text} </p>
    );
  } 

  const bulletPointObjects = education.bulletPointsArray.map(textToObjectFunction);

  // RETURN EDUCATION DIV
  return (
    <div id="education" className="Education">
      <EducationHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />

      <div className="Education-info">
        <div className="Education-image-timeframe">
          <img className="Education-image" onClick={iconOnClick} src={Uwaterloo}  alt={"..."}></img>
          <div className="Education-timeframe-text" style={pageTextStyle}> {education.timeframe} </div>
        </div>
        <div className="Education-bullet-points">
          {bulletPointObjects}
        </div>
      </div>
    </div>
  );
}

export default Education;
