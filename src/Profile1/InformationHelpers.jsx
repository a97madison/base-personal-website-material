import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import {makePressableObject, getImage} from '../GlobalHelpers';

import '../ConstantStyles.css';

// DEFINE STYLE CONSTANTS
const singleInfoCellStyle = {
  display: "flex",
  marginLeft: "0.6vmin"
};

function makePressableText(text, link, liType) {
  return (
    <ListItem className={"Social-media-button"} onClick={() => window.open(link)} button>
      <div>{text}</div>
    </ListItem>
  );
}

// creates div for value text for simple key/value information cells
function secondDivBaseHelper(text) {
  return (
    <div key={1} style={singleInfoCellStyle} className="Profile-text"> {text} </div>
  );
}

// creates div for email text for email info cell
function secondDivEmailHelper(email) {
  return (
    <div key={1} style={singleInfoCellStyle} className="Profile-text-2">
      {makePressableText(email, email, "2")}
    </div>
  );
}

function makeSocialMediaObject(name, company) {
  // image constant uses getImage helper
  // if length of pair array is 3, show handle beside button
  const buttonImg = getImage(company);
  const text = name.length > 0? "(" + name + ")" : "";

  const imageObject = (
    <div key={"image"} className={"Social-image-container"}>
      <img className={"Social-image"} src={buttonImg} alt={"..."}></img>
    </div>
  );
  const textObject = (
    <div key="text" className={"Social-media-icon-text"}>
        <div> {text} </div>
    </div>
  );
  const objects = [imageObject, textObject];

  return (
    <div key={1} className="Social-media-icon">
      {objects}
    </div>
  );
}

function secondDivSocialMediaButtonHelper(pair) {
  const link = pair[1]
  const name = pair.length === 4 ? pair[pair.length-2] : ""
  const company = pair[0]

  const imageDiv = makeSocialMediaObject(name,company)

  return (
    <div key={1} className="Profile-text-2">
      <ListItem className="Social-media-button" onClick={() => window.open(link)} button>
        {imageDiv}
      </ListItem>
    </div>
  );
}

function secondDivBrandHelper(brandName) {
  const pressableObject = makePressableObject(brandName,"","Social");
  return (
    <div key={1} style={singleInfoCellStyle}>
      {pressableObject}
    </div>
  );
}

function secondDivLinkHelper(informationWithLink) {
  return (
    <div key={1} style={singleInfoCellStyle} className="Profile-text-2">
      {makePressableText(informationWithLink[0], informationWithLink[1], "2")}
    </div>
  );
}


export function myPairToStringFunction(pair) {
  const firstDiv = (
    <p key={0} className="Profile-text"> {pair[0] + ":"} </p>
  );

  let secondDiv = null;

  switch(pair[0]) {
    case "Full Name":
      secondDiv = secondDivBaseHelper(pair[1]);
      break;
    case "Age":
      secondDiv = secondDivBaseHelper(pair[1]);
      break;
    case "Birthdate":
      secondDiv = secondDivBaseHelper(pair[1]);
      break;
    case "Email":
      secondDiv = secondDivEmailHelper(pair[1]);
      break;
    case "Bookings":
      secondDiv = secondDivEmailHelper(pair[1]);
      break;
    case "Brand":
      secondDiv = secondDivBrandHelper(pair[1]);
      break;
    case "Company":
      secondDiv = secondDivBrandHelper(pair[1]);
      break;
    case "LinkedIn":
      secondDiv = secondDivSocialMediaButtonHelper(pair);
      break;
    case "Github":
      secondDiv = secondDivSocialMediaButtonHelper(pair);
      break;
    case "Twitter":
      secondDiv = secondDivSocialMediaButtonHelper(pair);
      break;
    case "Facebook":
      secondDiv = secondDivSocialMediaButtonHelper(pair);
      break;
    case "Twitch":
      secondDiv = secondDivSocialMediaButtonHelper(pair);
      break;
    case "Instagram":
      secondDiv = secondDivSocialMediaButtonHelper(pair);
      break;
    case "City":
      secondDiv = secondDivLinkHelper(pair[1]);
      break;
    case "Address":
      secondDiv = secondDivLinkHelper(pair[1]);
      break;
    case "Phone #":
      secondDiv = secondDivBaseHelper(pair[1]);
      break;
    case "Job Title":
      secondDiv = secondDivBaseHelper(pair[1]);
      break;
    default:
      secondDiv = secondDivBaseHelper(pair[1]);
  }

  const key = pair[pair.length-1]
  const infoCell = [firstDiv,secondDiv]

  return (
    <div key={key} className={"Information-cell"}>
      <div style={singleInfoCellStyle}>
        {infoCell}
      </div>
    </div>
  );
}
