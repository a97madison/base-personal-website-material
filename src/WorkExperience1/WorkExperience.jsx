import React from 'react';
import SwishLogo from '../Images/SwishLogo.png';
import WorkExperienceHeader from './WorkExperienceHeader';
import WorkExperienceCell from './WorkExperienceCell';

import './WorkExperience.css';

let headerFont = null;
let pageFont = null;
let headerTextColour = null;
let pageTextColour = null;

function workCellsToCellFunction(cellProps) {
  // return div for one work experience cell
  return (
    <WorkExperienceCell
      companyName={cellProps.companyName}
      companyLink={cellProps.companyLink}
      city={cellProps.city}
      timeframe={cellProps.timeframe}
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
function WorkExperience(props) {
  // props are: cellsProps, headerFont, pageFont, headerTextColour, pageTextColour

  headerFont = props.headerFont;
  pageFont = props.pageFont;
  headerTextColour = props.headerTextColour;
  pageTextColour = props.pageTextColour;
  const workExperienceCells = props.cellsProps.map(workCellsToCellFunction)

  // RETURN WORKEXPERIENCE DIV
  return (
    <div className="Work-experience">
      <WorkExperienceHeader 
        headerFont={props.headerFont}
        headerTextColour={props.headerTextColour}
      />

      <div className="Work-experience-cells">
        {workExperienceCells}
      </div>
    </div>
  );
}

export default WorkExperience;
