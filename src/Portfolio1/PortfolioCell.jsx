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
      fontSize: '1.45vmin',
      overflowWrap: 'normal',
      color: props.pageTextColour,
      fontFamily: props.pageFont,
      textAlign: 'left',
      margin: '0.7vmin 0px 0px 0px'
    };

    const pageTextStyle = {
      fontSize: '1.45vmin',
      color: props.headerTextColour,
      fontFamily: props.pageFont,
      marginLeft: '1vmin',
      textAlign: 'left'
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
        <p style={bulletPointTextStyle}> {text} </p>
      );
    } 

    const bulletPointObjects = props.bulletPointsArray.map(textToObjectFunction);

  // RETURN PORTFOLIO CELL DIV
  return (
    <div className="Portfolio-cell">
      <div className="Title-gif-date">
        <div style={pageTextStyle}> {props.title} </div>
        <img className="Project-image" onClick={iconOnClick} src={img}  alt={"..."}></img>
        <div style={pageTextStyle}> {props.time} </div>
      </div>
      <div className="Portfolio-bullet-points">
        {bulletPointObjects}
      </div>
    </div>
  );
}

export default PortfolioCell;
