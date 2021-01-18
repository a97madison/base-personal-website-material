import React from 'react';
import * as Constants from '../JsxConstants';

import '../ConstantStyles.scss';

function EducationHeader(props) {
  // RETURN EDUCATION HEADER DIV
  return (
    <div className="header">
      <p> {Constants.educationText} </p>
    </div>
  );
}

export default EducationHeader;
