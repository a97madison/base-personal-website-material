import React from 'react';
import ProfileHeader from './ProfileHeader';
import Information from './Information';
import ProfilePhoto from './ProfilePhoto';
import AboutMe from './AboutMe';

function Profile(props) {
  const color1 = props.color1, color2 = props.color2, appHeight = props.appHeight, informationPairs = props.informationPairs, aboutMeText = props.aboutMeText;

  // DEFINE STYLE CONSTANTS
  const profileStyle = {
    background: "linear-gradient(0deg, " + color1 + ", " + color2 + " 100%)",
    display: "flex",
    flexDirection: "column",
    minHeight: appHeight,
    width: "100vw"
  };
  const profileSectionsStyle = {
    display: "flex",
    marginRight: "20vw",
    height: "70vh",
    marginBlock: "1vh",
    justifyContent: "center",
  };
  const sectionStyle = {
    width: "25vw",
  };
  const sectionParentStyle = {
    overflowX: "scroll",
    overflowY: "scroll",
    padding: "4px",
    border: "0.25vmin solid darkgrey",
    borderRadius: "4.5%",
    height: "62vh",
    marginTop: "3vh",
    marginBottom: "3vh",
  };

  // return div for Profile
  return (
    <div id="profile" style={profileStyle}>
      <ProfileHeader />

      <div style={profileSectionsStyle}>
        <Information
          sectionStyle={sectionStyle}
          sectionParentStyle={sectionParentStyle}
          informationPairs={informationPairs}
        />

        <ProfilePhoto
          bgColour={props.bgColour}
          // photo itself should be passed as a prop.
        />

        <AboutMe
          sectionStyle={sectionStyle}
          sectionParentStyle={sectionParentStyle}
          aboutMeText={aboutMeText}
        />
      </div>
    </div>
  );
}

export default Profile;
