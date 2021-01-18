import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import "./Sidebar.scss";
import './ConstantStyles.scss';

function Sidebar(props) {

  function onListItemClick(name) {
    var elmntToView = document.getElementById(name);
    elmntToView.scrollIntoView({behavior: 'smooth' });
  } // end of onListItemClick method

  // return div for sidebar
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {props.items.map(({ label, name, ...rest }) => (
          <ListItem className="sidebar-list-item" onClick={() => onListItemClick(name)} key={name} button {...rest}>
            <ListItemText >
              <div className="sidebar-text">{label}</div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar
