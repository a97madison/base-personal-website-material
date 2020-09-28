import React, { useLayoutEffect, useState } from 'react';
import List from '@material-ui/core/List'
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
import Chess from './Images/Chess.png';
import Personal from './Images/Personal.png';
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

export function makeButton(name, link, buttonClass) {
  
  function getImage(name) {
    if (name == "LINKEDIN") {
      return LinkedInLogo;
    } else if (name == "INKLING") {
      return InklingLogo;
    } else if (name == "COGNITIVE SYSTEMS CORPORATION") {
      return CSCLogo;
    } else if (name == "CANADIAN INSTITUTE FOR HEALTH INFORMATION") {
      return CIHILogo;
    } else if (name == "AXONIFY INC.") {
      return AxonifyLogo;
    } else if (name == "PUREFACTS") {
      return PurefactsLogo;
    } else if (name == "UWaterloo") {
      return Uwaterloo;
    } else if (name == "Two player chess game web application") {
      return Chess;
    } else if (name == "Personal website") {
      return Personal;
    } else if (name == "LinkedIn") {
      return LinkedIn;
    } else if (name == "Github") {
      return Github;
    } else if (name == "Twitter") {
      return Twitter;
    } else if (name == "Twitch") {
      return Twitch;
    } else if (name == "Facebook") {
      return Facebook;
    } else if (name == "Instagram") {
      return Instagram;
    } else if (name == "Swish Studios") {
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

  function onButtonItemClick(link) {
    window.open(link);
  }

  const imgClassName = buttonClass + "-image";
  const liClassName = buttonClass + "-li";
  // return button (list item) div
  // BUTTONCLASS-image and BUTTONCLASS-li style defined in appropiate css file
  return [
      (<img className={imgClassName} src={buttonImg} alt={"..."}></img>),
      (<ListItem className={liClassName} onClick={() => onButtonItemClick(link)} key={name} button></ListItem>)
  ];
}