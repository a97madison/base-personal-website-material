import React from 'react';

const emptyHrStyle = {
    border: '0px solid'
};
  
const profileHrStyle = {
    border: '0.4vmin solid darkgrey',
    marginRight: '10vw',
    backgroundColor: 'darkgrey'
};

export const emptyHr = (
    <hr style={emptyHrStyle}></hr>
);

export const profileHr = (
    <hr style={profileHrStyle}></hr>
);
