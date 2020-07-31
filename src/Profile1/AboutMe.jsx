import React from 'react';
// import style constants
import {aboutMeStyle, aboutMeTextStyle} from './StyleConstants';
import {headerTextStyle, pageTextStyle} from './Profile';

/*
    This section of the profile contains the person's paragraph that gives a main description
    about themselves.
*/
function AboutMe(props) {
    return (
        <div className="About-me" style={aboutMeStyle}>
          <p style={headerTextStyle}> {"ABOUT ME"} </p>
          <div style={pageTextStyle}>
            <p style={aboutMeTextStyle}>
              {props.aboutMeText}
            </p>
            </div>
        </div>
    );
}

export default AboutMe;
