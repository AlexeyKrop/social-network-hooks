import {Box, CssBaseline, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import {NavLink} from "react-router-dom";
import s from './Sidebar.module.css'

const listItems = [
  {
    listIcon: <PersonIcon/>,
    listText: "Profile",
    nav: "/profile"
  },
  {
    listIcon: <PeopleIcon/>,
    listText: "Friends",
    nav: "/friends"
  },
  {
    listIcon: <MessageIcon/>,
    listText: "Message",
    nav: "/dialogs"
  }
];

export const Sidebar = () => {
  return (
    <>
      <CssBaseline/>
      <Box className={s.wrapper} component="div">
        <List>
          {listItems.map((listItem, index) => (
            <NavLink className={s.link} key={index} to={listItem.nav}><ListItem button >
              <ListItemIcon>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText}/>
            </ListItem></NavLink>
          ))}
        </List>
      </Box>
    </>
  );
}
