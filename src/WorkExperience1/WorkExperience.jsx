import React from 'react';
import WorkExperienceHeader from './WorkExperienceHeader';
import WorkExperienceCell from './WorkExperienceCell';

function workCellsToCellFunction(cellProps) {
  // return div for one work experience cell
  return (
    <WorkExperienceCell
      companyName={cellProps.companyName}
      companyLink={cellProps.companyLink}
      city={cellProps.city}
      timeframe={cellProps.timeframe}
      bulletPointsArray={cellProps.bulletPointsArray}
    />
  );
}

function WorkExperience(props) {
  const color1 = props.color1, color2 = props.color2, appHeight = props.appHeight;

  // DEFINE STYLE CONSTANTS
  const workExperienceStyle = {
    background: color1,
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    display: "flex",
    flexDirection: "column",
    minHeight: appHeight,
    width: "100%",
    left: "0px",
    overflowY: "scroll"
  };

  const workExperienceCellsStyle = {
    margin: "0px 20vw 5vh 0px",
    display: "flex",
    flexDirection: "column",
    borderBottom: "0.1vmin solid darkgrey",
    right: "0.4vmin"
  };

  const workExperienceCells = props.cellsProps.map(workCellsToCellFunction)

  // RETURN WORKEXPERIENCE DIV
  return (
    <div id="work" style={workExperienceStyle}>
      <WorkExperienceHeader />

      <div style={workExperienceCellsStyle}>
        {workExperienceCells}
      </div>
    </div>
  );
}

export default WorkExperience;
