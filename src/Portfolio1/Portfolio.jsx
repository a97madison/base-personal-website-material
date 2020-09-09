import React from 'react';
import PortfolioHeader from './PortfolioHeader';

import './Portfolio.css';

/*
    This section of the website will be the main page.
*/
function Portfolio(props) {

  // RETURN PORTFOLIO DIV
  return (
    <div className="Portfolio">
      <PortfolioHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />

      <div className="Portfolio-cells">
      </div>
    </div>
  );
}

export default Portfolio;
