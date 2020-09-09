import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// import style
import './Sidebar.css';

function Sidebar(props) {
  function onListItemClick(name) {
    var elmntToView = document.getElementById(name);
    elmntToView.scrollIntoView();
  } // end of onListItemClick method

  const menuTextStyle = {
    fontSize: '0.7vw',
    color: props.textColour,
    fontFamily: props.font,
    paddingRight: '1px',
    position: 'relative',
    top: '0px',
    left: '0vw',
    textAlign: 'center'
  }

  return (
    <div className="Sidebar">
      <List disablePadding dense>
        {props.items.map(({ label, name, ...rest }) => (
          <ListItem className="Sidebar-list-item" onClick={() => onListItemClick(name)} key={name} button {...rest}>
            <ListItemText style={menuTextStyle}>
              <div style={menuTextStyle}>{label}</div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar