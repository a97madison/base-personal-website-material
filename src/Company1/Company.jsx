import React from 'react';
import CompanyHeader from './CompanyHeader';
import Collage from '../Images/Collage.png';

import './Company.css';

/*
    This section of the website will be the main page.
*/
function Company(props) {

  // RETURN PORTFOLIO DIV
  return (
    <div className="Brand">
      <CompanyHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />
      <img src={Collage} className="Collage-style"></img>
    </div>
  );
}

export default Company;
