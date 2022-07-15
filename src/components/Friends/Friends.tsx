import React, {useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../bll/state/hooks";
import s from './Friends.module.css'
import {ActionAreaCard} from "./Card/Card";
import {updateStatusTC} from "../../bll/profileReducer";
import {getUsersTC, setCurrentPageAC, setFetchingPageAC, setFollowTC} from "../../bll/usersReducer";


export const Friends = React.memo(() => {
  const dispatch = useAppDispatch()
  const onChangeStatusValue = useCallback((inputValue: string) => {
    dispatch(updateStatusTC(inputValue))
  }, [dispatch])
  const users = useAppSelector(state => state.users.users)
  const fetching = useAppSelector(state => state.users.fetching)
  const page = useAppSelector(state => state.users.page)
  useEffect(() => {
    if (fetching) {
      dispatch(getUsersTC(page, 10))
      dispatch(setFetchingPageAC(false))
      dispatch(setCurrentPageAC(page))
    }
  }, [page, fetching, dispatch])
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })
  const scrollHandler = (e: any) => {
    if (e.currentTarget.documentElement.scrollHeight - (e.currentTarget.documentElement.scrollTop + window.innerHeight) < 100) {
      dispatch(setFetchingPageAC(true))
    }
  }
  const getFollowUser = (id: number) => {
    dispatch(setFollowTC(id))
  }
  return (
    <>
      <div className={s.wrapper}>
        {users.map(u => {
          return <div className={s.card} key={u.id}>
            <ActionAreaCard onChangeStatusValue={onChangeStatusValue} getFollowUser={getFollowUser}
                            user={u}/>
          </div>
        })}
      </div>
    </>
  )
})