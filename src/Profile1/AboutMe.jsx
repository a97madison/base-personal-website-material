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
      color: props.headerTextColour,
      fontFamily: props.headerFont,
    };

    const pageTextStyle = {
      color: props.pageTextColour,
      fontFamily: props.pageFont
    };    

    // RETURN ABOUTME DIV
    return (
        <div className="About-me">
          <p className="Profile-sections-header-text" style={headerTextStyle}> {"ABOUT ME"} </p>
          <div className="About-me-container" style={pageTextStyle}>
            <p className="About-me-text">
              {props.aboutMeText}
            </p>
            </div>
        </div>
    );
}

export default AboutMe;
