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
  // props are: headerFont, pageFont, fullName, bgColour, headerTextColour, pageTextColour, 
  // headerIntro, informationPairs, aboutMeText={aboutMeText}
  
  return (
    <div id="profile" className="Profile">
      <ProfileHeader
        headerIntro={props.headerIntro}
        headerFont={props.headerFont}
        pageFont={props.pageFont}
        headerTextColour={props.headerTextColour}
        pageTextColour={props.pageTextColour}
      />
      
      <div>
        <div className="Profile-sections">
          <Information
            informationPairs={props.informationPairs}
            headerFont={props.headerFont}
            pageFont={props.pageFont}
            headerTextColour={props.headerTextColour}
            pageTextColour={props.pageTextColour}
          />

          <ProfilePhoto
            bgColour={props.bgColour}
            // photo itself should be passed as a prop.
          />

          <AboutMe
            aboutMeText={props.aboutMeText}
            headerFont={props.headerFont}
            pageFont={props.pageFont}
            headerTextColour={props.headerTextColour}
            pageTextColour={props.pageTextColour}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
