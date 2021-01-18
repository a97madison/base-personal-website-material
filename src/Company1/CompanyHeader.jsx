import React from 'react';

import '../ConstantStyles.scss';

import * as Constants from '../JsxConstants';

function CompanyHeader(props) {
  // RETURN COMPANY HEADER DIV
  return (
    <div className="header">
      <p> {Constants.companyText} </p>
    </div>
  );
}

export default CompanyHeader;
