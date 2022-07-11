import React, {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../bll/state/hooks";
import s from './Friends.module.css'
import {ActionAreaCard} from "./Card/Card";
import {updateStatusTC} from "../../bll/profileReducer";
import {getUserTC} from "../../bll/usersReducer";

export const Friends = React.memo(() => {
  const [fetching, setFetching] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const dispatch = useAppDispatch()
  const onChangeStatusValue = useCallback((inputValue: string) => {
    dispatch(updateStatusTC(inputValue))
  }, [dispatch])
  const users = useAppSelector(state => state.users.users)
  useEffect(() => {
    if (fetching) {
      dispatch(getUserTC(currentPage, 20))
      setCurrentPage(currentPage + 1)
      setFetching(false)
    }
    }, [currentPage, fetching, dispatch])
    useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
        document.removeEventListener('scroll', scrollHandler)
      }
    })
    const scrollHandler = (e: any) => {
      if (e.currentTarget.documentElement.scrollHeight - (e.currentTarget.documentElement.scrollTop + window.innerHeight) < 100) {
        setFetching(true)
      }
    }
    return (
      <>
        <div className={s.wrapper}>
          {users.map(u => {
            return <div className={s.card} key={u.id}><ActionAreaCard onChangeStatusValue={onChangeStatusValue}
                                                                      user={u}/>
            </div>
          })}
        </div>
      </>
    )
  })