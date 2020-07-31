import React from 'react';
import HomePage1 from '../Images/HomePage1.png';
import HomePage2 from '../Images/HomePage2.png';
// style constants
import {homePageStyle, homePageStyle2, bgImageStyle} from './StyleConstants';

/*
    This section of the website will be the main page.
*/
function HomePage(props) {

  const bgImageURL = "url('../Images/profilePhoto.png')"

  // style for Home Page text
  let tempHomePageTextStyle = {
    fontSize: '5vw',
    color: props.textColour,
    fontFamily: props.textFont,
    zIndex: '2'
  };

  const contentStyle = {
    opacity: '1',
    border: '3px solid white',
    zIndex: '2',
  };

  return (
    <div>
      <div className="Home-page" id="Home-page" style={homePageStyle}>
        <img src={HomePage2} style={bgImageStyle} alt={props.fullName + "!"}></img>
        {/* <div className="Home-page-content"> */}
        <p style={tempHomePageTextStyle}>
          {props.fullName}
        </p>
      </div>

      <div style={homePageStyle2}>
        <iframe width="350" height="200" style={contentStyle} src="https://www.youtube.com/embed/7kBqrFsvims" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default HomePage;
