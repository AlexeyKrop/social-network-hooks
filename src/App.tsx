import React, {useEffect} from 'react';
import './App.css';
import {getUserTC} from "./bll/usersReducer";
import {useAppDispatch} from "./bll/state/hooks";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Friends} from "./components/Friends/Friends";


export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserTC())
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <main>
          <Routes>
            <Route path="/profile/" element={<Profile/>}/>
            <Route path="/friends/" element={<Friends/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
