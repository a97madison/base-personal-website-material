import React from 'react';
import CompanyHeader from './CompanyHeader';

import * as Constants from '../JsxConstants';

import '../ConstantStyles.scss';

function Company(props) {
  const color1 = props.color1, color2 = props.color2, appWidth = props.appWidth;

  // DEFINE STYLE CONSTANTS
  const companyStyle = {
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginTop: "449vh",
    height: "100vh",
    width: "100vw",
    top: "0px",
    left: "0px",
  };

  const companyTextStyle = {
    position: "absolute",
    top: "45vh",
    left: "0px",
    width: appWidth,
    textAlign: "center"
  };

  // RETURN COMPANY DIV
  return (
    <div id="company" style={companyStyle}>
      <CompanyHeader />
      <div style={companyTextStyle} className="page-text-1">{Constants.comingSoonText}</div>
    </div>
  );
}

export default Company;
