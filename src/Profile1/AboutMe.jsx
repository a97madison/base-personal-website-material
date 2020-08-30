import React from 'react';

import './AboutMe.css';

/*
    This section of the profile contains the person's paragraph that gives a main description
    about themselves.
*/
function AboutMe(props) {

    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
      fontSize: '3vw',
      color: props.headerTextColour,
      fontFamily: props.headerFont
    };

    const pageTextStyle = {
      fontSize: '1.5vw',
      color: props.pageTextColour,
      fontFamily: props.pageFont
    };    

    // RETURN ABOUTME DIV
    return (
        <div className="About-me">
          <p style={headerTextStyle}> {"ABOUT ME"} </p>
          <div style={pageTextStyle}>
            <p className-="About-me-text">
              {props.aboutMeText}
            </p>
            </div>
        </div>
    );
}

export default AboutMe;
