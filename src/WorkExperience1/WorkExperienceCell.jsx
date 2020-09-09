import React from 'react';
import LinkedInLogo from '../Images/LinkedIn.jpg';
import InklingLogo from '../Images/Inkling.jpg';
import CSCLogo from '../Images/CSC.jpg';
import CIHILogo from '../Images/CIHI.jpg';
import AxonifyLogo from '../Images/Axonify.png';
import PurefactsLogo from '../Images/Purefacts.png';



import './WorkExperienceCell.css';

/*
    This section of the website will be for one Work Experience cell.
*/
function WorkExperienceCell(props) {
  // props are: companyName, companyLink, city, timeframe, bulletPointsArray, 
  // headerFont, pageFont, headerTextColour, pageTextColour
  
  // cell variables are: compname, complogo, complink, city, startdate, enddate, array of bulletpoints

    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
      fontSize: '2vmin',
      color: props.headerTextColour,
      fontFamily: props.headerFont,
    };

    const bulletPointTextStyle = {
      fontSize: '2vmin',
      color: props.pageTextColour,
      fontFamily: props.pageFont,
      textAlign: 'left',
      position: 'relative',
      left: '33vw',
      top: '-11.9vh',
      margin: '0.1vh 0px 0px 0px'
    };

    const pageTextStyle = {
      fontSize: '2vmin',
      color: props.pageTextColour,
      fontFamily: props.pageFont,
      marginLeft: '0.32vw',
      marginTop: '-0.1vh',
      textAlign: 'center'
    }

    function getImageFunction(company) {
      if (company == "LINKEDIN") {
        return LinkedInLogo;
      } else if (company == "INKLING") {
        return InklingLogo;
      } else if (company == "COGNITIVE SYSTEMS CORPORATION") {
        return CSCLogo;
      } else if (company == "CANADIAN INSTITUTE FOR HEALTH INFO.") {
        return CIHILogo;
      } else if (company == "AXONIFY INC.") {
        return AxonifyLogo;
      }
      return PurefactsLogo;
    }
  
    const img = getImageFunction(props.companyName);

    function iconOnClick() {
      window.open(props.companyLink);
    }

    function textToObjectFunction(text) {
      return (
        <p style={bulletPointTextStyle}> {text} </p>
      );
    } 

    const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN WORKEXPERIENCE CELL DIV
  return (
    <div className="Work-experience-cell">
      <div className="Cell-info">
        <p style={headerTextStyle}> {props.companyName} </p>
        <div className="Logo-city-timeframe">
          <button className=".company-button" onClick={iconOnClick}>
            <img className="Company-image" src={img}  alt={"..."}></img>
          </button>
          <p style={pageTextStyle}> {props.city + ","} </p>
          <p style={pageTextStyle}> {props.timeframe} </p>
        </div>
      </div>
      <div className="Bullet-points">
        {bulletPointObjects}
      </div>
    </div>
  );
}

export default WorkExperienceCell;
