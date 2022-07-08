import {Box, CssBaseline, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import {Link} from "react-router-dom";
// const useStyles = makeStyles((theme: any) => ({
//   menuSliderContainer: {
//     width: 250,
//     background: "#511",
//     height: "100%"
//   },
//   avatar: {
//     margin: "0.5rem auto",
//     padding: "1rem",
//     width: theme.spacing(13),
//     height: theme.spacing(13)
//   },
//   listItem: {
//     color: "tan"
//   }
// }));

const listItems = [
  {
    listIcon: <PersonIcon/>,
    listText: "Profile"
  },
  {
    listIcon: <PeopleIcon/>,
    listText: "Friends"
  },
  {
    listIcon: <MessageIcon/>,
    listText: "Message"
  }
];

export const Sidebar = () => {
  return (
    <>
      <CssBaseline/>
      <Box component="div">
        <List>
          <Link to="/profile">
            <ListItem>
              <ListItemIcon>
                {<PersonIcon/>}
              </ListItemIcon>
              <ListItemText primary={'Profile'}/>
            </ListItem>
          </Link>
          <Link to='/friends'>
            <ListItem>
              <ListItemIcon>
                {<PeopleIcon/>}
              </ListItemIcon>
              <ListItemText primary={'Friends'}/>
            </ListItem>
          </Link>

          <ListItem>
            <ListItemIcon>
              {<MessageIcon/>}
            </ListItemIcon>
            <ListItemText primary={'Message'}/>
          </ListItem>
          {listItems.map((listItem, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText}/>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
