import {Link} from "react-router-dom";
import s from './Profile.module.css'
import React, {useCallback, useEffect} from "react";
import {fetchProfileTC, getProfileStatusTC, updateStatusTC} from "../../bll/profileReducer";
import {useAppDispatch, useAppSelector} from "../../bll/state/hooks";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {MyPost} from "./My post/MyPost";
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box/Box";






export const Profile = React.memo(() => {
  const dispatch = useAppDispatch()
  const profileUser = useAppSelector((state) => state.profile.profile)
  const status = useAppSelector((state) => state.profile.status)
  const loading = useAppSelector(state => state.app.loading)
  useEffect(() => {
    dispatch(fetchProfileTC(24111))
    dispatch(getProfileStatusTC((24111)))
  }, [dispatch])
  const onChangeStatusValue = useCallback((inputValue: string) => {
    dispatch(updateStatusTC(inputValue))
  }, [dispatch])
  return (
    <>
      {loading === 'loading' && <LinearProgress sx={{position: 'fixed', width: '100%', top: '70px'}}/>}
      <Box className={s.wrapper}>
      <Box component={'div'} className={s.profile}>
        <Box component='div' className={s.profile_info}>
          <Link to="#">
            <img
              className={s.image}
              src="https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg"
              alt="img"/>
          </Link>
        </Box>
        <Box component='div' className={s.profile_title}>
          <EditableSpan title={status} callBack={onChangeStatusValue}/>
          <h3 className={s.userName}>
            <span>Name:</span>{profileUser.fullName ? profileUser.fullName : 'name will come later'}</h3>
          <h3 className={s.contacts}><span>Contacts:</span>{profileUser.contacts && 'contacts will come later'}</h3>
        </Box>
      </Box>
        <MyPost/>
      </Box>
    </>
  )
})