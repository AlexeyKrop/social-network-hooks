import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Friends} from "./components/Friends/Friends";
import {Dialogs} from "./components/Dialogs/Dialogs";
import LinearProgress from "@mui/material/LinearProgress";
import {useAppSelector} from "./bll/state/hooks";


export const App = () => {
  const loading = useAppSelector(state => state.app.loading)
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        {loading === 'loading' && <LinearProgress sx={{position: 'fixed', width: '100%', top: '64px'}}/>}
        <main>
          <Routes>
            <Route path="/profile/" element={<Profile/>}/>
            <Route path="/friends/" element={<Friends/>}/>
            <Route path="/dialogs/" element={<Dialogs/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
