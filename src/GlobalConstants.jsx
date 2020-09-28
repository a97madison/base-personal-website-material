import React from 'react';

const emptyHrStyle = {
    border: '0px solid'
};
  
const profileHrStyle = {
    border: '0.1vmin solid darkgrey',
    backgroundColor: 'darkgrey',
    marginBottom: '0px',
    paddingTop: "0.2vh",
};

export const emptyHr = (
    <hr style={emptyHrStyle}></hr>
);

export const profileHr = (
    <hr style={profileHrStyle}></hr>
);
