import React from 'react';
import {pageInfoTextStyle} from './Profile';
import {buttonStyle} from './StyleConstants';
import LinkedIn from '../Images/LinkedIn.jpg';
import Github from '../Images/Github.jpg';
import Twitter from '../Images/Twitter.jpg';
import Facebook from '../Images/Facebook.jpg';
import Twitch from '../Images/Twitch.jpg';

// import style constants
import {singleInformationCellStyle} from './StyleConstants';

// creates div for value text for simple key/value information cells
export function secondDivBaseHelper(text) {
    return (
        <p style={pageInfoTextStyle}> {text} </p>
    );
}

// creates div for email text for email info cell
export function secondDivEmailHelper(email) {
    return (
        
        <p style={pageInfoTextStyle}> 
            <a href = {"mailto: "+email} style={pageInfoTextStyle}>{email}</a>
        </p>
    );
}

export function secondDivSocialMediaButtonHelper1(pair) {
    function iconOnClick() {
        window.open(pair[1]);
    }
    
// do this    // window.open("https://www.geeksforgeeks.org"); 

    let icon = null;
    switch (pair[0]) {
        case "LinkedIn":
            icon = LinkedIn;
            break;
        case "Github":
            icon = Github;
            break;
        case "Twitter":
            icon = Twitter;
            break;
        case "Facebook":
            icon = Facebook;
            break;
        case "Twitch":
            icon = Twitch;
            break;
        default:
    }

    // icon style
    const iconStyle = {
        background: icon,
        objectFit: 'fit',
        height: '2.5vw',
        width: '2.5vw',
    };

    const buttonIcon = (
        <button style={buttonStyle} onClick={iconOnClick}>
            <img src={icon} style={iconStyle} alt={"..."}></img>
        </button>
    );

    return buttonIcon;
}

export function secondDivSocialMediaButtonHelper2(pair) {
    // show handle beside button
    const buttonIcon = secondDivSocialMediaButtonHelper1([pair[0], pair[1][1]]);

    function textOnClick() {
        window.open(pair[1][1]);
    }

    let socialMediaHandle = (
        <p style={pageInfoTextStyle} onClick={textOnClick}>
            {"(" + pair[1][0] + ")"}
        </p>
    );
    return (
        <div style={singleInformationCellStyle}>
            {buttonIcon}
            {socialMediaHandle}
        </div>
    )
}

export function secondDivLinkHelper(informationWithLink) {
    return (
        <p style={pageInfoTextStyle}>
            <a href={informationWithLink[1]}>{informationWithLink[0]}</a>
        </p>
    );
}


export function myPairToStringFunction(pair) {
    const firstDiv = (
        <p style={pageInfoTextStyle}> {pair[0] + ":"} </p>
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
        case "LinkedIn":
            secondDiv = secondDivSocialMediaButtonHelper1(pair);
            break;
        case "Github":
            secondDiv = secondDivSocialMediaButtonHelper2(pair);
            break;
        case "Twitter":
            secondDiv = secondDivSocialMediaButtonHelper2(pair);
            break;
        case "Facebook":
            secondDiv = secondDivSocialMediaButtonHelper1(pair);
            break;
        case "Twitch":
            secondDiv = secondDivSocialMediaButtonHelper2(pair);
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
        case "Company":
            secondDiv = secondDivLinkHelper(pair[1]);
            break;
        default:
            secondDiv = secondDivBaseHelper(pair[1]);
        
    }

    return (
        <div className={"Information-cell-" + pair[0]} style={singleInformationCellStyle}>
            {firstDiv}
            {secondDiv}
        </div>
    );
}