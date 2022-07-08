import {Box, CssBaseline, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import {Link} from "react-router-dom";
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
      <Box component="div"
           sx={{
             width: '20%',
             position: 'fixed',
             backgroundColor: '#fffff'
           }}
           >
        <List>
          {listItems.map((listItem, index) => (
            <Link className={s.link} key={index} to={listItem.nav}><ListItem button >
              <ListItemIcon>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText}/>
            </ListItem></Link>
          ))}
        </List>
      </Box>
    </>
  );
}
