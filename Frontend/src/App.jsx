import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import WikiPage from './components/WikiPage';
import Dashboard from './components/Dashboard'
import { Button } from '@mui/material'
import NavBar from './components/NavBar'
import Login from './components/Login'


const App = () => {
 
  return (
    <Router>
    
      <NavBar/>
      <Routes>
      <Route path="/"  element={<Login/>} />
        <Route path="/wiki"  element={<SearchPage/>} />
        <Route path="/wiki/:slug" element={<WikiPage />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};


export default App;
