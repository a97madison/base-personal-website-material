import React from 'react';
import LinkedIn from '../Images/LinkedIn.jpg';
import Github from '../Images/Github.jpg';
import Twitter from '../Images/Twitter.jpg';
import Facebook from '../Images/Facebook.jpg';
import Twitch from '../Images/Twitch.jpg';
import Instagram from '../Images/Instagram.jpg';
import SwishLogo from '../Images/SwishLogo.png';

// creates div for value text for simple key/value information cells
function secondDivBaseHelper(text) {
    return (
        <p className="Page-info-text"> {text} </p>
    );
}

// creates div for email text for email info cell
function secondDivEmailHelper(email) {
    return (
        
        <p className="Page-info-text"> 
            <a href = {"mailto: "+email} className="Page-info-text">{email}</a>
        </p>
    );
}

function secondDivSocialMediaButtonHelper1(pair) {
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
        case "Instagram":
            icon = Instagram;
            break;
        default:
    }

    // image style
    const imgStyle = {
        background: icon
    };

    const buttonIcon = (
        <button className="button" onClick={iconOnClick}>
            <img className="Social-img" src={icon} style={imgStyle} alt={"..."}></img>
        </button>
    );

    return buttonIcon;
}

function secondDivSocialMediaButtonHelper2(pair) {
      
    // show handle beside button
    const buttonIcon = secondDivSocialMediaButtonHelper1([pair[0], pair[1][1]]);

    function textOnClick() {
        window.open(pair[1][1]);
    }

    let socialMediaHandle = (
        <p className="Page-info-text" onClick={textOnClick}>
            {"(" + pair[1][0] + ")"}
        </p>
    );
    return (
        <div className="Single-information-cell">
            {buttonIcon}
            {socialMediaHandle}
        </div>
    )
}

function secondDivBrandHelper(brandName) {
    function iconOnClick() {}

    let icon = null;
    switch(brandName) {
        case "Swish Studios":
            icon = SwishLogo;
            break;
        default:
    }

    // image style
    const imgStyle = {
        background: icon,
        objectFit: 'cover',
        height: '3.6vmin',
        width: '3.6vmin',
    };

    return (
        <div className="Single-information-cell">
            <button className="button" onClick={iconOnClick}>
                <img src={icon} style={imgStyle} alt={"..."}></img>
            </button>
        </div>
    );
}

function secondDivLinkHelper(informationWithLink) {
    return (
        <p className="Page-info-text">
            <a href={informationWithLink[1]}>{informationWithLink[0]}</a>
        </p>
    );
}


export function myPairToStringFunction(pair) {
    const firstDiv = (
        <p className="Page-info-text"> {pair[0] + ":"} </p>
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
        case "Instagram":
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
        <div className={"Information-cell-" + pair[0]}>
            <div className="Single-information-cell">
                {firstDiv}
                {secondDiv}
            </div>
        </div>
    );
}