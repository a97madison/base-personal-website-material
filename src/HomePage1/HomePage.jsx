import React from 'react';

import './HomePage.scss';

function HomePage(props) {
  const fullName = props.fullName, introText = props.introText;

  // RETURN HOMEPAGE DIV
  return (
    <div id="home">
      <div className="home-page">
        <div className="home-page-parent">
          <p className="home-page-text">{fullName}</p>
          <div className="intro-text">{introText}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
