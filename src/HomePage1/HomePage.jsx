import React from 'react';
import SwishLogo from '../Images/SwishLogo.png';
// import helper
import {useWindowSize} from '../GlobalHelpers';

import './HomePage.css';

/*
    This section of the website will be the main page.
*/
function HomePage(props) {

  const bgImageURL = "url('../Images/profilePhoto.png')"
  
  // DEFINE STYLE CONSTANTS
  let homePageTextStyle = {
    fontSize: '5vw',
    color: props.textColour,
    fontFamily: props.textFont,
    zIndex: '2'
  };

  const [windowWidth, windowHeight] = useWindowSize();

  const homePageStyle = {
    height: windowHeight,
    width: windowWidth,
  };

  // RETURN HOMEPAGE DIV
  return (
    <div>
      <div className="Home-page" id="Home-page" style={homePageStyle}>
        <p style={homePageTextStyle}>
          {props.fullName}
        </p>
        <img className="Bg-image" src={SwishLogo}  alt={props.fullNam + "!"}></img>
        {/* <div className="Home-page-content"> */}

      </div>
    </div>
  );
}

export default HomePage;
