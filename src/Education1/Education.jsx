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
    position: 'relative',
    top: '5vh',
    width: '100%',
    textAlign: 'center',
    fontSize: '2vmin',
    color: props.headerTextColour,
    fontFamily: props.pageFont,
  }

  const bulletPointTextStyle = {
    fontSize: '2vmin',
    color: props.pageTextColour,
    fontFamily: props.pageFont,
    textAlign: 'left',
    padding: '4vh 0.2vw 4vh 2.5vw',
    position: 'relative',
    margin: '0.7vmin 0px 0px 0px'
  };

  function iconOnClick() {
    window.open(education.schoolLink);
  }

  function textToObjectFunction(text) {
    return (
      <p style={bulletPointTextStyle}> {text} </p>
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
          <div style={pageTextStyle}> {education.timeframe} </div>
        </div>
        <div className="Education-bullet-points">
          {bulletPointObjects}
        </div>
      </div>
    </div>
  );
}

export default Education;