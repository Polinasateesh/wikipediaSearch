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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<SearchPage/>} />
        <Route path="/wiki/:slug" element={<WikiPage />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
