import React from 'react';
// todo: make gifs for each of these images
import Chess from '../Images/Chess.png';
import Personal from '../Images/Personal.png';
import Cian from '../Images/Cian.png';
import Seebs from '../Images/Seebs.png';
import Swish from '../Images/Swish.png';

import './PortfolioCell.css';

/*
    This section of the website will be for one Work Experience cell.
*/
function PortfolioCell(props) {
  // props are: title, time, bulletPointsArray, headerFont, pageFont, headerTextColour, pageTextColour
  
    // DEFINE STYLE CONSTANTS
    const bulletPointTextStyle = {
      color: props.pageTextColour,
      fontFamily: props.pageFont,
    };

    const pageTextStyle = {
      color: props.headerTextColour,
      fontFamily: props.pageFont,
    }

    function getImageFunction(title) {
      console.log(title);
      if (title == "Two player chess game web application") {
        return Chess;
      } else if (title == "Personal website") {
        return Personal;
      } else if (title == "@cian.p's personal website") {
        return Cian;
      } else if (title == "Young Lung's personal website") {
        return Seebs;
      }
      return Swish;
    }
  
    const img = getImageFunction(props.title);

    function iconOnClick() {
      window.open(props.projectLink);
    }

    function textToObjectFunction(text) {
      return (
        <p className="Portfolio-bullet-points" style={bulletPointTextStyle}> {text} </p>
      );
    } 

    const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN PORTFOLIO CELL DIV
  return (
    <div className="Portfolio-cell">
      <div className="Portfolio-page-text" style={pageTextStyle}> {props.title} </div>
  
      <div className="Gif-date-bullet-points">
        <div className="Gif-date">
          <img className="Project-image" onClick={iconOnClick} src={img}  alt={"..."}></img>
          <div className="Portfolio-page-text" style={pageTextStyle}> {props.time} </div>
        </div>
        <div>
          {bulletPointObjects}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCell;
