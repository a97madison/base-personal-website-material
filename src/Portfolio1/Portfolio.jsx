import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import PortfolioCell from './PortfolioCell';

import '../ConstantStyles.css';

function portfolioCellsToCellFunction(cellProps) {
  // return div for one work experience cell
  return (
    <PortfolioCell
      title={cellProps.title}
      time={cellProps.time}
      projectLink={cellProps.projectLink}
      bulletPointsArray={cellProps.bulletPointsArray}
    />
  );
}

function Portfolio(props) {
  const color1 = props.color1, color2 = props.color2, appHeight = props.appHeight, appWidth = props.appWidth;
  // DEFINE STYLE CONSTANTS
  const portfolioStyle = {
    background: color1,
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    position: "absolute",
    marginTop: "360vh",
    height: appHeight,
    width: "100%",
    top: "0px",
    left: "0px",
    overflowY: "scroll"
  };
  const portfolioCellsStyle = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "0px 20vw 0px 0px",
    borderBottom: "0.1vmin solid darkgrey",
    top: "0px",
    bottom: "0px"
  };
  const portfolioCells = props.cellsProps.map(portfolioCellsToCellFunction)
  const portfolioTextStyle = {
    marginTop: "2.2vh",
    width: appWidth,
    textAlign: "center"
  };
  
  // RETURN PORTFOLIO DIV
  return (
    <div id="portfolio" style={portfolioStyle}>
      <PortfolioHeader />

      <div style={portfolioCellsStyle}>
        {portfolioCells}
      </div>

      <div style={portfolioTextStyle} className="Page-text-1">{"MORE COMING SOON"}</div>
    </div>
  );
}

export default Portfolio;
