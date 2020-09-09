import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import PortfolioCell from './PortfolioCell';

import './Portfolio.css';

let headerFont = null;
let pageFont = null;
let headerTextColour = null;
let pageTextColour = null;

function portfolioCellsToCellFunction(cellProps) {
  // return div for one work experience cell
  return (
    <PortfolioCell
      title={cellProps.title}
      time={cellProps.time}
      projectLink={cellProps.projectLink}
      bulletPointsArray={cellProps.bulletPointsArray}
      headerFont={headerFont}
      pageFont={pageFont}
      headerTextColour={headerTextColour}
      pageTextColour={pageTextColour}
    />
  );
}

/*
    This section of the website will be for Work Experience.
*/
function Portfolio(props) {
  // props are: cellsProps, headerFont, pageFont, headerTextColour, pageTextColour

  headerFont = props.headerFont;
  pageFont = props.pageFont;
  headerTextColour = props.headerTextColour;
  pageTextColour = props.pageTextColour;
  const portfolioCells = props.cellsProps.map(portfolioCellsToCellFunction)

  // RETURN PORTFOLIO DIV
  return (
    <div id="portfolio" className="Portfolio">
      <PortfolioHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />

      <div className="Portfolio-cells">
        {portfolioCells}
      </div>
    </div>
  );
}

export default Portfolio;
