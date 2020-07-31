import React from 'react';

const emptyHrStyle = {
    border: '0px solid'
};
  
const profileHrStyle = {
    border: '0.15vw solid white'
};

export const emptyHr = (
    <hr style={emptyHrStyle}></hr>
);

export const profileHr = (
    <hr style={profileHrStyle}></hr>
);
