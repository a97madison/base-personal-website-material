import React from 'react';
import ListItem from '@material-ui/core/ListItem'
// import images
import LinkedInLogo from './Images/LinkedIn.jpg';
import InklingLogo from './Images/Inkling.png';
import CSCLogo from './Images/CSC.jpg';
import CIHILogo from './Images/CIHI.jpg';
import VisionaireLogo from './Images/Visionaire.jpg';
import PurefactsLogo from './Images/Purefacts.png';
import Uwaterloo from './Images/UWaterloo.jpg';
// todo: make gifs for each of these images
import Chess from './Images/Chess.gif';
import Personal from './Images/Personal.gif';
import Swish from './Images/Swish.png';
import LinkedIn from './Images/LinkedIn.jpg';
import Github from './Images/Github.jpg';
import Twitter from './Images/Twitter.jpg';
import Facebook from './Images/Facebook.jpg';
import SwishLogo from './Images/SwishLogo.png';
import Twitch from './Images/Twitch.jpg';
import Instagram from './Images/Instagram.jpg';

import './Profile1/Information.scss';
import './StyleConstants.scss';

export function getImage(name) {
  if (name === "LINKEDIN") {
    return LinkedInLogo;
  } else if (name === "INKLING") {
    return InklingLogo;
  } else if (name === "COGNITIVE SYSTEMS CORPORATION") {
    return CSCLogo;
  } else if (name === "CANADIAN INSTITUTE FOR HEALTH INFORMATION") {
    return CIHILogo;
  } else if (name === "VISIONAIRE 3D") {
    return VisionaireLogo;
  } else if (name === "PUREFACTS FINANCIAL SOLUTIONS") {
    return PurefactsLogo;
  } else if (name === "UWaterloo") {
    return Uwaterloo;
  } else if (name === "Two player chess game web application") {
    return Chess;
  } else if (name === "Personal website") {
    return Personal;
  } else if (name === "LinkedIn") {
    return LinkedIn;
  } else if (name === "Github") {
    return Github;
  } else if (name === "Twitter") {
    return Twitter;
  } else if (name === "Twitch") {
    return Twitch;
  } else if (name === "Facebook") {
    return Facebook;
  } else if (name === "Instagram") {
    return Instagram;
  } else if (name === "Swish Studio's website") {
    return Swish;
  }
  return SwishLogo;
}

export function makePressableObject(text, imageName, link, pressableType) {
  // image constant uses getImage helper
  const buttonImg = getImage(imageName);
  const iconText = text.length > 0? "(" + text + ")" : "";

  const imageClassName = pressableType + "-image"

  const imageObject = (
    <div key={"image"} className={"pressable-image-container"}>
      <img className={imageClassName} src={buttonImg} alt={"..."}></img>
    </div>
  );
  const textObject = (
    <div key="text" className={"social-icon-text"}>
        <div> {iconText} </div>
    </div>
  );

  const objects = [imageObject, textObject];
  const className = pressableType === "social" ? "icon-button" : "pressable-button";

  return (
    <ListItem className={className} onClick={() => window.open(link)} button>
      <div key={1} className="pressable-icon">
        {objects}
      </div>
    </ListItem>
  );
}

export function textToObjectFunction(textObject) {
  const key = textObject[1]
  const text = textObject[0]
  return (
    <div key={key} className="cell-bullet-point-parent">
      <div className="cell-bullet-point-text"> {text} </div>
    </div>
  );
}
