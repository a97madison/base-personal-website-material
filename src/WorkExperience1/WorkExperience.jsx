import React from 'react';
import WorkExperienceHeader from './WorkExperienceHeader';
import WorkExperienceCell from './WorkExperienceCell';

import './WorkExperience.scss';
import '../ConstantStyles.scss';

function workCellsToCellFunction(cellProps) {
  // return div for one work experience cell
  return (
    <WorkExperienceCell
      key={cellProps.key}
      companyName={cellProps.companyName}
      companyLink={cellProps.companyLink}
      city={cellProps.city}
      timeframe={cellProps.timeframe}
      bulletPointsArray={cellProps.bulletPointsArray}
    />
  );
}

function WorkExperience(props) {
  const workExperienceCells = props.cellsProps.map(workCellsToCellFunction)

  // RETURN WORKEXPERIENCE DIV
  return (
    <div id="work" className="work-experience">
      <WorkExperienceHeader />

      <div className="work-experience-cells">
        {workExperienceCells}
      </div>
    </div>
  );
}

export default WorkExperience;
