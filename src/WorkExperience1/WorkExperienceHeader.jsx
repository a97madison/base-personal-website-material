import React from 'react';

import * as Constants from '../JsxConstants';

import '../ConstantStyles.scss';

function WorkExperienceHeader(props) {
  // RETURN PROFILEHEADER DIV
  return (
    <div className="header">
        <p> {Constants.workExperienceText} </p>
    </div>
  );
}

export default WorkExperienceHeader;
