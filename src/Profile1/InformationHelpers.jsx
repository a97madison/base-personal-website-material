import React from 'react';
import {makePressableObject, makePressableText} from '../GlobalHelpers';

import '../ConstantStyles.css';

// DEFINE STYLE CONSTANTS
const singleInfoCellStyle = {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    marginLeft: "0.6vmin"
};

// creates div for value text for simple key/value information cells
function secondDivBaseHelper(text) {
    return (
        <p style={singleInfoCellStyle} className="Page-text-1"> {text} </p>
    );
}

// creates div for email text for email info cell
function secondDivEmailHelper(email) {
    return (
        <div style={singleInfoCellStyle} className="Page-text-1"> 
            {makePressableText(email, email, "2")}
        </div>
    );
}

function secondDivSocialMediaButtonHelper1(pair) { 
    // do this    // window.open("https://www.geeksforgeeks.org"); 
    const pressableObject = makePressableObject(pair[0],pair[1],"Social");
    return (
        <div style={singleInfoCellStyle}> 
            {pressableObject}
        </div>
    );
}

function secondDivSocialMediaButtonHelper2(pair) {
    // show handle beside button
    const pressableObject = secondDivSocialMediaButtonHelper1([pair[0], pair[1][1]]);
    const pressableText = (
        <div style={singleInfoCellStyle}>
            {makePressableText("(" + pair[1][0] + ")", pair[1][1], "1")}
        </div>
    );
    const socialMedia2Style = {
        display: "flex",
        flexDirection: "row"
    };

    return (
        <div style={socialMedia2Style}>
            {pressableObject}
            {pressableText}
        </div>
    );
}

function secondDivBrandHelper(brandName) {
    const pressableObject = makePressableObject(brandName,"","Social");
    return (
        <div style={singleInfoCellStyle}> 
            {pressableObject}
        </div>
    );
}

function secondDivLinkHelper(informationWithLink) {
    return (
        <div style={singleInfoCellStyle} className="Page-text-1">
            {makePressableText(informationWithLink[0], informationWithLink[1], "2")}
        </div>
    );
}


export function myPairToStringFunction(pair) {
    const firstDiv = (
        <p className="Page-text-1"> {pair[0] + ":"} </p>
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
        <div className={"Information-cell"}>
            <div style={singleInfoCellStyle}>
                {firstDiv}
                {secondDiv}
            </div>
        </div>
    );
}