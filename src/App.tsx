import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Friends} from "./components/Friends/Friends";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Login} from "./components/Login/Login";


export const App = React.memo(() => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <main>
          <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path='profile/' element={<Profile/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path="/friends/" element={<Friends/>}/>
            <Route path="/dialogs/" element={<Dialogs/>}/>
            <Route path="/login/" element={<Login/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
})
