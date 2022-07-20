import {Navigate} from "react-router-dom";
import React from "react";
import {useAppSelector} from "../../bll/state/hooks";

export const Dialogs = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  if (!isAuth) {
    return <Navigate to ="/login"/>
  }
  return(
    <div>'Dialogs page'</div>
  )
}