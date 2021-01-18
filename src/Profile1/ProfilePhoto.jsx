import React from 'react';
import profilePhoto from '../Images/profilePhoto.png';

import './Profile.scss';

function ProfilePhoto(props) {
  // RETURN PROFILEPHOTO DIV
  return (
    <div className="profile-photo">
      <img className="profile-img" src={profilePhoto} alt={"..."}></img>
    </div>
  );
}

export default ProfilePhoto;
