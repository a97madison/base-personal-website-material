import React from 'react';
import CompanyHeader from './CompanyHeader';

import '../ConstantStyles.css';

function Company(props) {
  const color1 = props.color1, color2 = props.color2, appWidth = props.appWidth;
  
  // DEFINE STYLE CONSTANTS
  const companyStyle = {
    background: color1,
    background: "linear-gradient(0deg, " + color1 + " 31%, " + color2 + "100%)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginTop: "449vh",
    height: "100%",
    width: "100%",
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
      <div style={companyTextStyle} className="Page-text-1">{"COMING SOON"}</div>
    </div>
  );
}

export default Company;
