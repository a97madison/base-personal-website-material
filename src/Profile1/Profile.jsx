import React from 'react';
import ProfileHeader from './ProfileHeader';
import Information from './Information';
import ProfilePhoto from './ProfilePhoto';
import AboutMe from './AboutMe';
// import helper
import {useWindowSize} from '../GlobalHelpers';

import './Profile.css';

/*
    This section of the website will be on the very top. The props being passed to
    this function are: fullName (string), 
*/
function Profile(props) {
  // FUCK... I JUST FOUND A BUG... WHEN U FUCK WITH THE DIMENSIONS, THE BACKGROUND GETS FUCKED UP
  // style for outer Profile div

  // DEFINE STYLE CONSTANTS
  const [windowWidth, windowHeight] = useWindowSize();

  const profileStyle = {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: props.bgColour
  };

  return (
    <div className="Profile" style={profileStyle}>
      <ProfileHeader
        headerIntro={props.headerIntro}
      />
      
      <div>
        <div className="Profile-sections">
          <Information
            informationPairs={props.informationPairs}
          />

          <ProfilePhoto
            bgColour={props.bgColour}
            // photo itself should be passed as a prop.
          />

          <AboutMe
            aboutMeText={props.aboutMeText}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
