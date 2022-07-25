import {Navigate} from "react-router-dom";
import React from "react";
import {useAppSelector} from "../../bll/state/hooks";

export const Dialogs = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)


  return (
    <>
      {isAuth && <Navigate to="/login"/>}
      <div>'Dialogs page'</div>
    </>
  )
}