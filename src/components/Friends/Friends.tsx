import {useCallback, useEffect} from "react";
import {getUserTC} from "../../bll/usersReducer";
import {useAppDispatch, useAppSelector} from "../../bll/state/hooks";
import s from './Friends.module.css'
import {ActionAreaCard} from "./Card/Card";
import {updateStatusTC} from "../../bll/profileReducer";

export const Friends = () => {
  const dispatch = useAppDispatch()
  const onChangeStatusValue = useCallback((inputValue: string) => {
    dispatch(updateStatusTC(inputValue))
  }, [dispatch])
  const users = useAppSelector(state => state.users.users)
  useEffect(() => {
    dispatch(getUserTC())
  }, [dispatch])
  return (
    <>
      <div className={s.wrapper}>
        {users.map(u => {
          return <div className={s.card} key={u.id}><ActionAreaCard onChangeStatusValue={onChangeStatusValue} user={u}/></div>
        })}
      </div>
    </>
  )
}