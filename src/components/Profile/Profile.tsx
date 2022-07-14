import {NavLink, useParams} from "react-router-dom";
import s from './Profile.module.css'
import React, {useCallback, useEffect} from "react";
import {fetchProfileTC, getProfileStatusTC, updateStatusTC} from "../../bll/profileReducer";
import {useAppDispatch, useAppSelector} from "../../bll/state/hooks";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {MyPost} from "./My post/MyPost";
import Box from "@mui/material/Box/Box";


export const Profile = React.memo(() => {
  const dispatch = useAppDispatch()
  const profileUser = useAppSelector((state) => state.profile.profile)
  const status = useAppSelector((state) => state.profile.status)
  const params = useParams<'id'>();
  let id = params.id
  useEffect(() => {
    if (id) {
      dispatch(fetchProfileTC(+id))
    }else{
      dispatch(fetchProfileTC(24111))
    }
    dispatch(getProfileStatusTC((24111)))
  }, [id, dispatch])
  const onChangeStatusValue = useCallback((inputValue: string) => {
    dispatch(updateStatusTC(inputValue))
  }, [dispatch])
  return (
    <>
      <Box className={s.wrapper}>
        <Box component={'div'} className={s.profile}>
          <Box component='div' className={s.profile_info}>
            <NavLink to="#">
              <img
                className={s.image}
                src="https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg"
                alt="img"/>
            </NavLink>
          </Box>
          <Box component='div' className={s.profile_title}>
            <Box className={s.statusWrapper}>
              <span>Status: </span><EditableSpan title={status} callBack={onChangeStatusValue}/>
            </Box>
            <h3 className={s.userName}>
              <span>Name:</span>{profileUser.fullName ? profileUser.fullName : 'name will come later'}</h3>
            <h3><span>Contacts:</span>{profileUser.contacts && 'contacts will come later'}</h3>
          </Box>
        </Box>
        <MyPost/>
      </Box>
    </>
  )
})