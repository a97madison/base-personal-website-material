import React from 'react';
import ProfileHeader from './ProfileHeader';
import Information from './Information';
import ProfilePhoto from './ProfilePhoto';
import AboutMe from './AboutMe';

import './Profile.scss';

function Profile(props) {
  const informationPairs = props.informationPairs, aboutMeText = props.aboutMeText;

  // return div for Profile
  return (
    <div id="profile" className="profile">
      <ProfileHeader />

      <div className="profile-sections">
        <Information
          informationPairs={informationPairs}
        />

        <ProfilePhoto
          bgColour={props.bgColour}
          // photo itself should be passed as a prop.
        />

        <AboutMe
          aboutMeText={aboutMeText}
        />
      </div>
    </div>
  );
}

export default Profile;
