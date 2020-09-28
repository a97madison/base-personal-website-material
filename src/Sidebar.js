import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// import style
import "./Sidebar.css";
import './ConstantStyles.css';

function Sidebar(props) {
  const appHeight = props.appHeight, appWidth = props.appWidth;

  function onListItemClick(name) {
    var elmntToView = document.getElementById(name);
    elmntToView.scrollIntoView({behavior: 'smooth' });
  } // end of onListItemClick method

  // DEFINE STYLE CONSTANTS
  const sidebarStyle = {
    position: "fixed",
    top: "0",
    right: "0",
    left: appWidth,
    height: appHeight,
    zIndex: "1",
  };
  const sidebarTextStyle = {
    textAlign: "center"
  };

  // return div for sidebar
  return (
    <div style={sidebarStyle}>
      <List disablePadding dense>
        {props.items.map(({ label, name, ...rest }) => (
          <ListItem className="Sidebar-list-item" onClick={() => onListItemClick(name)} key={name} button {...rest}>
            <ListItemText > 
              <div style={sidebarTextStyle} className="Header-text-2">{label}</div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar