import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import s from './Profile.module.css'
export const Profile = () => {
  return(
    <>
      <Box component={'div'} className={s.profile}>
        <Box component='div' className={s.image_info}>
          <Link to="#">
            <img
              className={s.image}
              src="https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg"
              alt="img"/>
          </Link>
        </Box>
        <Box component='div' className={s.title_info}>
          <p>Имя</p>
          <p>Статуc</p>
          <p>Почта</p>
        </Box>
      </Box>
    </>
  )
}