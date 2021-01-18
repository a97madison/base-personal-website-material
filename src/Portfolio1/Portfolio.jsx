import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import PortfolioCell from './PortfolioCell';

import './Portfolio.scss';
import '../ConstantStyles.scss';

function portfolioCellsToCellFunction(cellProps) {
  // return div for one work experience cell
  return (
    <PortfolioCell
      key={cellProps.key}
      title={cellProps.title}
      time={cellProps.time}
      projectLink={cellProps.projectLink}
      bulletPointsArray={cellProps.bulletPointsArray}
      linksArray={cellProps.linksArray}
    />
  );
}

function Portfolio(props) {

  const portfolioCells = props.cellsProps.map(portfolioCellsToCellFunction)

  // RETURN PORTFOLIO DIV
  return (
    <div id="portfolio" className="portfolio">
      <PortfolioHeader />

      <div className="portfolio-cells">
        {portfolioCells}
        <div className="portfolio-text">{"MORE COMING SOON"}</div>
      </div>

    </div>
  );
}

export default Portfolio;
