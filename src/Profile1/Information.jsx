import React from 'react';
// import information helpers
import {
  myPairToStringFunction
} from './InformationHelpers';

import "./Information.scss";
import '../ConstantStyles.scss';

function Information(props) {
  const informationPairs = props.informationPairs;
  const informationCells = informationPairs.map(myPairToStringFunction)

  // RETURN INFORMATION DIV
  return (
    <div className="profile-section">
      <div className="profile-section-parent">
        <p className="header-text-2"> {"INFORMATION"} </p>
        <div>
          {informationCells}
        </div>
      </div>
    </div>
  );
}

export default Information;
