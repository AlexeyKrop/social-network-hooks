import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Friends} from "./components/Friends/Friends";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Login} from "./components/Login/Login";
import {useAppDispatch, useAppSelector} from "./bll/state/hooks";
import {appInitialTC} from "./bll/appReducer";
import {CircularIndeterminate} from "./utils/preloader/CircularIndeterminate";


export const App = React.memo(() => {
  const dispatch = useAppDispatch()
  const initialized = useAppSelector(state => state.app.initialized)
  useEffect(() => {
    dispatch(appInitialTC())
  }, [dispatch])
  if (!initialized) {
    return <CircularIndeterminate/>
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to={'profile'}/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path="friends" element={<Friends/>}/>
            <Route path="dialogs/" element={<Dialogs/>}/>
            <Route path="login" element={<Login/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
})
