import React from 'react';
import ProfileHeader from './ProfileHeader';
import Information from './Information';
import ProfilePhoto from './ProfilePhoto';
import AboutMe from './AboutMe';

// style for Profile Header text
let tempHeaderTextStyle = {
  fontSize: '3vw'
};

// style for Profile page text
let tempPageTextStyle = {
  fontSize: '1.5vw'
};

// style for Profile information page text
let tempPageInfoTextStyle = {
  fontSize: '1.2vw',
  marginLeft: '4px'
}

/*
    This section of the website will be on the very top. The props being passed to
    this function are: fullName (string), 
*/
function Profile(props) {

  // style for outer Profile div
  const profileStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    marginTop: '100vh',
    height: '100vh',
    top: '0px', bottom: '0px', left: '0px', right: '0px',
    backgroundColor: props.bgColour
  };

  const profileSectionsStyle = {
    margin: '0px 12vw 0px 12vw',
    display: 'flex',
    flexDirection: 'row',
    border: '0.45vw solid white',
    position: 'relative',
    height: '100%',
    top: '0',
    bottom: '0px'
  };

  tempHeaderTextStyle.color = props.headerTextColour;
  tempPageTextStyle.color = props.pageTextColour;
  tempPageInfoTextStyle.color = props.pageTextColour;

  tempHeaderTextStyle.fontFamily = props.headerFont;
  tempPageTextStyle.fontFamily = props.pageFont;
  tempPageInfoTextStyle.fontFamily = props.pageFont;

  return (
    <div className="Profile" style={profileStyle}>
      <ProfileHeader
        headerIntro={props.headerIntro}
      />
      
      <div className="Profile-sections">
        <div style={profileSectionsStyle}>
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

export const headerTextStyle = tempHeaderTextStyle;
export const pageTextStyle = tempPageTextStyle;
export const pageInfoTextStyle = tempPageInfoTextStyle;

export default Profile;
