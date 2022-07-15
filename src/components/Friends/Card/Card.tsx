import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';
import CardActions from "@mui/material/CardActions";
import {UserType} from "../../../api/api";
import s from "../Friends.module.css";
import {NavLink} from 'react-router-dom';

type CardType = {
  user: UserType
  onChangeStatusValue: (value: string) => void
  getFollowUser: (id: number) => void
}
export const ActionAreaCard = (props: CardType) => {
  const onClickHandler = (id: number) => {
    props.getFollowUser(id)
  }
  return (
    <Card sx={{maxWidth: 265}}>
      <NavLink className={s.link} to={`/profile/${props.user.id}`}>
        <CardMedia
          component="img"
          image={props.user.photos.small ? props.user.photos.small : "https://w7.pngwing.com/pngs/841/727/png-transparent-computer-icons-user-profile-synonyms-and-antonyms-android-android-computer-wallpaper-monochrome-sphere.png"}
          alt="user"
          sx={{width: '150px', height: '150px'}}
        />
          <Typography gutterBottom variant="h5" component="p">
            {props.user.name}
          </Typography>
      </NavLink>
        <Typography gutterBottom variant="subtitle2" component="p">
          {props.user.status !== null ? props.user.status : 'status will come later'}
        </Typography>
      <CardActions>
        <Button onClick={() => onClickHandler(props.user.id)} size="small" color="primary">
          {props.user.followed ? 'follow' : 'unfollow'}
        </Button>
      </CardActions>
    </Card>
  );
}