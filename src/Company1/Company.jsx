import React from 'react';
import CompanyHeader from './CompanyHeader';
import Collage from '../Images/Collage.png';

import './Company.css';

function Company(props) {

  // RETURN COMPANY DIV
  return (
    <div id="brand" className="Brand">
      <img src={Collage} className="Collage-style"></img>
      <CompanyHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />
    </div>
  );
}

export default Company;
