import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';
import CardActions from "@mui/material/CardActions";
import {UserType} from "../../../api/api";

type CardType = {
  user: UserType
  onChangeStatusValue: (value: string) => void
}
export const ActionAreaCard = (props: CardType) => {
  return (
    <Card sx={{ maxWidth: 265 }}>
        <CardMedia
          component="img"
          image={props.user.photos.small ? props.user.photos.small : "https://w7.pngwing.com/pngs/841/727/png-transparent-computer-icons-user-profile-synonyms-and-antonyms-android-android-computer-wallpaper-monochrome-sphere.png"}
          alt="user"
          sx={{width: '150px', height: '150px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.user.name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            {props.user.status !== null ? props.user.status : 'status will come later'}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          {props.user.followed ? 'follow' : 'unfollow'}
        </Button>
      </CardActions>
    </Card>
  );
}