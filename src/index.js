import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login'
import Leagues from './pages/Leagues';
import About from './pages/About';
import Teams from './pages/Teams';
import Team from './pages/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/leagues/:code' element={<Leagues />} />
            <Route path='/teams/:season/:leagueID' element={<Teams />} />
            <Route path='/teams/:season/:leagueID/:teamID' element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
