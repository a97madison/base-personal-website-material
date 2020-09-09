import React from 'react';
import CompanyHeader from './CompanyHeader';

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
    </div>
  );
}

export default Company;
