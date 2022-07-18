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
    nav: "/profile",
    className:`${s.item}`
  },
  {
    listIcon: <PeopleIcon/>,
    listText: "Friends",
    nav: "/friends",
    className:`${s.item}`
  },
  {
    listIcon: <MessageIcon/>,
    listText: "Message",
    nav: "/dialogs",
    className:`${s.item}`
  }
];
export const Sidebar = () => {
  return (
    <>
      <CssBaseline/>
      <Box className={s.wrapper} component="div">
        <List>
          {listItems.map((listItem, index) => (
            <NavLink  className={({ isActive }) =>
              isActive ? `${s.active} ` : `${s.link}`
            } key={index} to={listItem.nav}><ListItem button >
              <ListItemIcon >
                {listItem.listIcon }
              </ListItemIcon>
              <ListItemText primary={listItem.listText}/>
            </ListItem></NavLink>
          ))}
        </List>
      </Box>
    </>
  );
}
