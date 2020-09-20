import React from 'react';
import LinkedInLogo from '../Images/LinkedIn.jpg';
import InklingLogo from '../Images/Inkling.png';
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
  
  // cell variables are: compname, complogo, complink, city, timeframe, array of bulletpoints

    // DEFINE STYLE CONSTANTS
    const headerTextStyle = {
      color: props.headerTextColour,
      fontFamily: props.headerFont,
    };

    const bulletPointTextStyle = {
      color: props.pageTextColour,
      fontFamily: props.pageFont,
    };

    const pageTextStyle = {
      color: props.headerTextColour,
      fontFamily: props.pageFont,
    }

    function getImageFunction(company) {
      if (company == "LINKEDIN") {
        return LinkedInLogo;
      } else if (company == "INKLING") {
        return InklingLogo;
      } else if (company == "COGNITIVE SYSTEMS CORPORATION") {
        return CSCLogo;
      } else if (company == "CANADIAN INSTITUTE FOR HEALTH INFORMATION") {
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
        <div className="Work-experience-page-text" style={bulletPointTextStyle}> {text} </div>
      );
    } 

    const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN WORKEXPERIENCE CELL DIV
  return (
    <div className="Work-experience-cell">
      <div className="Work-experience-cell-header" style={headerTextStyle}> {props.companyName} </div>
      <div className="Work-experience-cell-info">
        <div className="Company-city-timeframe">
          <button className="Company-button" onClick={iconOnClick}>
            <img className="Company-image" src={img}  alt={"..."}></img>
          </button>
          <div className="Work-experience-page-text" style={pageTextStyle}> {props.timeframe} </div>
          <div className="Work-experience-page-text" style={pageTextStyle}> {props.city} </div>
        </div>
        <div>  
          {bulletPointObjects}
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceCell;
