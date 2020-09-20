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
    color: props.textColour,
    fontFamily: props.textFont
  };

  const [windowWidth, windowHeight] = useWindowSize();

  const homePageStyle = {
    height: windowHeight,
    width: windowWidth,
  };

  // RETURN HOMEPAGE DIV
  return (
    <div id="home">
      <div className="Home-page"> 
        <p className="Home-page-text" style={homePageTextStyle}>
          {props.fullName}
        </p>
        <img className="Bg-image" src={SwishLogo}  alt={"..."}></img>
        {/* <div className="Home-page-content"> */}

      </div>
    </div>
  );
}

export default HomePage;
