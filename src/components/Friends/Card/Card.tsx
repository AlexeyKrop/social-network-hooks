import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button/Button';
import CardActions from "@mui/material/CardActions";
import {UserType} from "../../../api/api";
import {EditableSpan} from "../../EditableSpan/EditableSpan";

type CardType = {
  user: UserType
  onChangeStatusValue: (value: string) => void
}
export const ActionAreaCard = (props: CardType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.user.photos.small || "https://avatars.mds.yandex.net/i?id=85bc0b592015ce11b5da2d3bea981128-5174496-images-thumbs&n=13"}
          alt="user"
        />
        <CardContent>
          <EditableSpan callBack={props.onChangeStatusValue} title={props.user.status !== null ? props.user.status : 'status will come later'} />
          <Typography gutterBottom variant="h5" component="div">
            {props.user.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.user.followed ? 'follow' : 'unfollow'}
        </Button>
      </CardActions>
    </Card>
  );
}