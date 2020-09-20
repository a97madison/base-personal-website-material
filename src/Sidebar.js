import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// import style
import './Sidebar.css';

function Sidebar(props) {
  function onListItemClick(name) {
    var elmntToView = document.getElementById(name);
    elmntToView.scrollIntoView({behavior: 'smooth' });
  } // end of onListItemClick method

  const menuTextStyle = {
    color: props.textColour,
    fontFamily: props.font,
  };

  return (
    <div className="Sidebar">
      <List disablePadding dense>
        {props.items.map(({ label, name, ...rest }) => (
          <ListItem className="Sidebar-list-item" onClick={() => onListItemClick(name)} key={name} button {...rest}>
            <ListItemText > 
              <div className="Sidebar-text" style={menuTextStyle}>{label}</div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar