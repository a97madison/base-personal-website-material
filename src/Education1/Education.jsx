import React from 'react';
import SwishLogo from '../Images/SwishLogo.png';
import EducationHeader from './EducationHeader';

import './Education.css';

/*
    This section of the website will be the main page.
*/
function Education(props) {

  // RETURN EDUCATION DIV
  return (
    <div className="Education">
      <EducationHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />

      <div className="Education-info">
      </div>
    </div>
  );
}

export default Education;
