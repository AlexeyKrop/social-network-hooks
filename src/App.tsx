import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Friends} from "./components/Friends/Friends";
import {Dialogs} from "./components/Dialogs/Dialogs";


export const App = React.memo(() => {
  console.log('App reder')
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <main>
          <Routes>
            <Route path='profile/' element={<Profile/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path="/friends/" element={<Friends/>}/>
            <Route path="/dialogs/" element={<Dialogs/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
})
