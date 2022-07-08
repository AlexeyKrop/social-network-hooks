import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import s from './Profile.module.css'
import {useEffect} from "react";
import {fetchProfileTC} from "../../bll/profileReducer";
import {useAppDispatch, useAppSelector} from "../../bll/state/hooks";
export const Profile = () => {
  const dispatch = useAppDispatch()
  const profileUser = useAppSelector((state) => state.profile.profile)
  const status = useAppSelector((state) => state.profile.status)
useEffect(() => {
  dispatch(fetchProfileTC(24111))
},[dispatch])
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
          <p>{status ? status : 'Статус'}</p>
          <p>{profileUser.fullName}</p>
          <p>{profileUser.contacts && 'contacts will come later'}</p>
        </Box>
      </Box>
    </>
  )
}