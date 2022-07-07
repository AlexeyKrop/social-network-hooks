import React, {useEffect} from 'react';
import './App.css';
import {getUserTC} from "./bll/usersReducer";
import {useAppDispatch} from "./bll/state/hooks";

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserTC())
  })
  return (
    <div className="App">
    </div>
  );
}
