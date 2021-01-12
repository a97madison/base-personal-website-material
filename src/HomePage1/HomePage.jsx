import React from 'react';

import '../ConstantStyles.css';

/*
    This section of the website will be the main page.
*/
function HomePage(props) {
  const color1 = props.color1, color2 = props.color2, fullName = props.fullName, introText = props.introText, textFont = props.textFont, appHeight = props.appHeight, appWidth = props.appWidth;

  // DEFINE STYLE CONSTANTS
  const homePageStyle = {
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    height: appHeight,
    width: "100vw"
  };
  const homePageParentStyle = {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    height: appHeight
  }
  const homePageTextStyle = {
    fontFamily: textFont,
    fontSize: "5vw",
    width: appWidth,
    position: "absolute",
    left: "0"
  };
  const introTextStyle = {
    display: "block",
    width: appWidth,
    alignItems: "center",
    paddingTop: "10vw"
  };

  // RETURN HOMEPAGE DIV
  return (
    <div id="home">
      <div style={homePageStyle}>
        <div style={homePageParentStyle}>
          <p style={homePageTextStyle}>{fullName}</p>
          <div style={introTextStyle} className="Page-text-1">{introText}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
