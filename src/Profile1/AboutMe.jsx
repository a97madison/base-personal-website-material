import React from 'react';

import './AboutMe.css';

/*
    This section of the profile contains the person's paragraph that gives a main description
    about themselves.
*/
function AboutMe(props) {
    // props are: aboutMeText, headerFont, pageFont, headerTextColour, pageTextColour
    
    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
      fontSize: '4vmin',
      color: props.headerTextColour,
      fontFamily: props.headerFont,
      height: '8vh'
    };

    const pageTextStyle = {
      fontSize: '2.5vmin',
      color: props.pageTextColour,
      fontFamily: props.pageFont
    };    

    // RETURN ABOUTME DIV
    return (
        <div className="About-me">
          <p style={headerTextStyle}> {"ABOUT ME"} </p>
          <div className="About-me-container" style={pageTextStyle}>
            <p className="About-me-text">
              {props.aboutMeText}
            </p>
            </div>
        </div>
    );
}

export default AboutMe;
