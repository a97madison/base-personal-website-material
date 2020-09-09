import React from 'react';
import LinkedIn from '../Images/LinkedIn.jpg';
import Github from '../Images/Github.jpg';
import Twitter from '../Images/Twitter.jpg';
import Facebook from '../Images/Facebook.jpg';
import Twitch from '../Images/Twitch.jpg';
import Instagram from '../Images/Instagram.jpg';
import SwishLogo from '../Images/SwishLogo.png';

// creates div for value text for simple key/value information cells
function secondDivBaseHelper(text, pageInfoTextStyle) {
    return (
        <p style={pageInfoTextStyle}> {text} </p>
    );
}

// creates div for email text for email info cell
function secondDivEmailHelper(email, pageInfoTextStyle) {
    return (
        
        <p style={pageInfoTextStyle}> 
            <a href = {"mailto: "+email} style={pageInfoTextStyle}>{email}</a>
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

    // icon style
    const iconStyle = {
        background: icon,
        objectFit: 'contain',
        height: '5vmin',
        width: '5vmin',
    };

    const buttonIcon = (
        <button className="button" onClick={iconOnClick}>
            <img src={icon} style={iconStyle} alt={"..."}></img>
        </button>
    );

    return buttonIcon;
}

function secondDivSocialMediaButtonHelper2(pair, pageInfoTextStyle) {
      
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

    // icon style
    const iconStyle = {
        background: icon,
        objectFit: 'fill',
        height: '3.6vmin',
        width: '3.6vmin',
    };

    return (
        <div className="Single-information-cell">
            <button className="button" onClick={iconOnClick}>
                <img src={icon} style={iconStyle} alt={"..."}></img>
            </button>
        </div>
    );
}

function secondDivLinkHelper(informationWithLink, pageInfoTextStyle) {
    return (
        <p style={pageInfoTextStyle}>
            <a href={informationWithLink[1]}>{informationWithLink[0]}</a>
        </p>
    );
}


export function myPairToStringFunction(pair) {
    const pageInfoTextStyle = {
        fontSize: '1.5vmin',
        marginLeft: '0.1vmin'
    };

    const firstDiv = (
        <p style={pageInfoTextStyle}> {pair[0] + ":"} </p>
    );

    let secondDiv = null;

    switch(pair[0]) {
        case "Full Name":
            secondDiv = secondDivBaseHelper(pair[1], pageInfoTextStyle);
            break;
        case "Age":
            secondDiv = secondDivBaseHelper(pair[1], pageInfoTextStyle);
            break;
        case "Birthdate":
            secondDiv = secondDivBaseHelper(pair[1], pageInfoTextStyle);
            break;
        case "Email":
            secondDiv = secondDivEmailHelper(pair[1], pageInfoTextStyle);
            break;
        case "Bookings":
            secondDiv = secondDivEmailHelper(pair[1], pageInfoTextStyle);
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
            secondDiv = secondDivSocialMediaButtonHelper2(pair, pageInfoTextStyle);
            break;
        case "Twitter":
            secondDiv = secondDivSocialMediaButtonHelper2(pair, pageInfoTextStyle);
            break;
        case "Facebook":
            secondDiv = secondDivSocialMediaButtonHelper1(pair);
            break;
        case "Twitch":
            secondDiv = secondDivSocialMediaButtonHelper2(pair, pageInfoTextStyle);
            break;
        case "Instagram":
            secondDiv = secondDivSocialMediaButtonHelper2(pair, pageInfoTextStyle);
            break;
        case "City":
            secondDiv = secondDivLinkHelper(pair[1], pageInfoTextStyle);
            break;
        case "Address":
            secondDiv = secondDivLinkHelper(pair[1], pageInfoTextStyle);
            break;
        case "Phone #":
            secondDiv = secondDivBaseHelper(pair[1], pageInfoTextStyle);
            break;
        case "Job Title":
            secondDiv = secondDivBaseHelper(pair[1], pageInfoTextStyle);
            break;
        case "Company":
            secondDiv = secondDivLinkHelper(pair[1], pageInfoTextStyle);
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