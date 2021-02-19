import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Resume from './Resume/AnthonyMadisonResume.pdf'

import "./Sidebar.scss";
import './ConstantStyles.scss';

function Sidebar(props) {

  function onListItemClick(name) {
    if (name === "resume") {
      window.open(Resume,'_blank');
      return
    }

    var elmntToView = document.getElementById(name);
    elmntToView.scrollIntoView({behavior: 'smooth' });
  } // end of onListItemClick method

  function getListItemText(label, name) {
    var className = "sidebar-text"
    if (name === "resume") {
      className = "sidebar-text-resume"
    }

    return (
      <ListItemText >
        <div className={className}>{label}</div>
      </ListItemText>
    )
  } // end of getListItemText method

  // return div for sidebar
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {props.items.map(({ label, name, ...rest }) => (
          <ListItem className="sidebar-list-item" onClick={() => onListItemClick(name)} key={name} button {...rest}>
            {getListItemText(label, name)}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar
