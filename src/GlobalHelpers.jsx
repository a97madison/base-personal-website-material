import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// import images
import LinkedInLogo from './Images/LinkedIn.jpg';
import InklingLogo from './Images/Inkling.png';
import CSCLogo from './Images/CSC.jpg';
import CIHILogo from './Images/CIHI.jpg';
import AxonifyLogo from './Images/Axonify.png';
import PurefactsLogo from './Images/Purefacts.png';
import Uwaterloo from './Images/UWaterloo.jpg';
// todo: make gifs for each of these images
import Chess from './Images/Chess.gif';
import Personal from './Images/Personal.gif';
// import Cian from './Images/Cian.png';
// import Seebs from './Images/Seebs.png';
import Swish from './Images/Swish.png';
import LinkedIn from './Images/LinkedIn.jpg';
import Github from './Images/Github.jpg';
import Twitter from './Images/Twitter.jpg';
import Facebook from './Images/Facebook.jpg';
import SwishLogo from './Images/SwishLogo.png';
import Twitch from './Images/Twitch.jpg';
import Instagram from './Images/Instagram.jpg';

import './ConstantStyles.css';

function onButtonItemClick(link) {
  window.open(link);
}

export function makePressableText(text, link, liType) {
  return (
    <ListItem className={"Pressable-li-" + liType} onClick={() => onButtonItemClick(link)} button>
      <ListItemText> 
        <div className={"Page-text-1"}>{text}</div>
      </ListItemText>
    </ListItem>
  );
}

export function makePressableObject(name, link, buttonClass) {
  
  function getImage(name) {
    if (name === "LINKEDIN") {
      return LinkedInLogo;
    } else if (name === "INKLING") {
      return InklingLogo;
    } else if (name === "COGNITIVE SYSTEMS CORPORATION") {
      return CSCLogo;
    } else if (name === "CANADIAN INSTITUTE FOR HEALTH INFORMATION") {
      return CIHILogo;
    } else if (name === "AXONIFY INC.") {
      return AxonifyLogo;
    } else if (name === "PUREFACTS") {
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
    } else if (name === "Swish Studios" || name == "Swish Studio's website") {
      return SwishLogo;
    } // else if (name == "@cian.p's personal website") {
      // return Cian;
    // } else if (name == "Young Lung's personal website") {
    //   return Seebs;
    // }
    return Swish;
  }

  // image constant uses getImage helper
  const buttonImg = getImage(name);

  const imgClassName = buttonClass + "-image";
  const liClassName = buttonClass + "-li";
  // return button (list item) div
  // BUTTONCLASS-image and BUTTONCLASS-li style defined in appropiate css file
  return [
      (<img className={imgClassName} src={buttonImg} alt={"..."}></img>),
      (<ListItem className={liClassName} onClick={() => onButtonItemClick(link)} key={name} button></ListItem>)
  ];
}