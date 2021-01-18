import React from 'react';

import * as Constants from '../JsxConstants';

import '../ConstantStyles.scss';

function PortfolioHeader(props) {
  // RETURN PROFILEHEADER DIV
  return (
    <div className="header">
      <p> {Constants.portfolioText} </p>
    </div>
  );
}

export default PortfolioHeader;
