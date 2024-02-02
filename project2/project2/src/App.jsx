import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/Travel_logo.png" alt="logo" width={'80'} height={"85"} />
        </span>
        <NavLink to="/" className='button rounded'>
          <span className='icon-home'></span>
          Home
        </NavLink>
        <NavLink to="/projects" className='button rounded'>
          Destination
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
