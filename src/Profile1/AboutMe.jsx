import React from 'react';

import '../ConstantStyles.css';

function AboutMe(props) {
    const sectionStyle = props.sectionStyle, sectionParentStyle = props.sectionParentStyle, aboutMeText = props.aboutMeText;

    // DEFINE STYLE CONSTANTS
    const aboutMeTextStyle = {
      textAlign: "left",
      marginLeft: "0.6vmin",
      marginRight: "0.6vmin"
    };
    
    // RETURN ABOUTME DIV
    return (
        <div style={sectionStyle}>
          <div style={sectionParentStyle}>
            <p className="Header-text-2"> {"ABOUT ME"} </p>
            <p style={aboutMeTextStyle} className="Page-text-1">
              {aboutMeText}
            </p>
            </div>
        </div>
    );
}

export default AboutMe;
