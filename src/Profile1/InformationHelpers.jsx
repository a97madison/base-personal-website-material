import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import {makePressableObject} from '../GlobalHelpers';

import * as Constants from '../JsxConstants';

import './Information.scss';
import '../StyleConstants.scss';

function makePressableText(text, link) {

  return (
    <ListItem className={"icon-button"} onClick={() => window.open(link)} button>
      <div>{text}</div>
    </ListItem>
  );
}

// creates div for value text for simple key/value information cells
function secondDivBaseHelper(text) {
  return (
    <div key={1} className="social-info-cell-1"> {text} </div>
  );
}

// creates div for email text for email info cell
function secondDivEmailHelper(email) {
  const emailLink = "mailto:" + email
  return (
    <div key={1} className="social-info-cell-2">
      {makePressableText(email, emailLink)}
    </div>
  );
}

function secondDivSocialButtonHelper(pair) {
  const text = pair.length === 4 ? pair[pair.length-2] : ""
  const imageName =  pair[0]
  const link = pair[1]
  const pressableType = Constants.socialPressableType;
  const pressableObject = makePressableObject(text,imageName,link,pressableType)

  return (
    <div key={1} className="social-info-cell-2">
      {pressableObject}
    </div>
  );
}

function secondDivLinkHelper(informationWithLink) {
  return (
    <div key={1} className="social-info-cell-2">
      {makePressableText(informationWithLink[0], informationWithLink[1])}
    </div>
  );
}


export function myPairToStringFunction(pair) {
  const firstDiv = (
    <p key={0} className="profile-text"> {pair[0] + ":"} </p>
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
    secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "Business":
      secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "LinkedIn":
      secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "Github":
      secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "Twitter":
      secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "Facebook":
      secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "Twitch":
      secondDiv = secondDivSocialButtonHelper(pair);
      break;
    case "Instagram":
      secondDiv = secondDivSocialButtonHelper(pair);
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
      <div className="social-info-cell">
        {infoCell}
      </div>
    </div>
  );
}
