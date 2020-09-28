import React from 'react';
import ProfileHeader from './ProfileHeader';
import Information from './Information';
import ProfilePhoto from './ProfilePhoto';
import AboutMe from './AboutMe';

function Profile(props) {
  const color1 = props.color1, color2 = props.color2, appHeight = props.appHeight, informationPairs = props.informationPairs, aboutMeText = props.aboutMeText;

  // DEFINE STYLE CONSTANTS 
  const profileStyle = {
    background: color1,
    background: "linear-gradient(0deg, " + color1 + ", " + color2 + " 100%)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginTop: appHeight,
    height: appHeight,
    width: "100%"
  };
  const profileSectionsStyle = {
    display: "flex",
    marginRight: "20vw",
    height: "75vh",
    marginBottom: "3vh",
    flexDirection: "row",
    justifyContent: "center",
    border: "1%"
  };
  const sectionStyle = {
    textAlign: "center",
    position: "relative",
    width: "25vw",
    height: "100%"
  };
  const sectionParentStyle = {
    overflowX: "scroll",
    overflowY: "scroll",
    padding: "10px",
    border: "0.25vmin solid darkgrey",
    borderRadius: "1%",
    height: "85%",
    marginTop: "3vh",
    marginBottom: "3vh",
    textAlign: "center",
    alignItems: "center"
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
