import React from 'react';

import './Profile.scss';
import '../ConstantStyles.scss';

function AboutMe(props) {
  const aboutMeText = props.aboutMeText;

  // RETURN ABOUTME DIV
  return (
    <div className="profile-section">
      <div className="profile-section-parent">
        <p className="header-text-2"> {"ABOUT ME"} </p>
        <p className="profile-about-me-text">
          {aboutMeText}
        </p>
        </div>
    </div>
  );
}

export default AboutMe;
