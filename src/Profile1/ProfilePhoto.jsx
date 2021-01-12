import React from 'react';
import profilePhoto from '../Images/profilePhoto.png';

function ProfilePhoto(props) {
  // DEFINE STYLE CONSTANTS
  const profilePhotoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25vw",
  }

  const profileImgStyle = {
    height: "20vw",
    borderRadius: "50%",
    border: "0.25vh solid darkgrey"
  }

  // RETURN PROFILEPHOTO DIV
  return (
    <div style={profilePhotoStyle}>
      <img style={profileImgStyle} src={profilePhoto} alt={"..."}></img>
    </div>
  );
}

export default ProfilePhoto;
