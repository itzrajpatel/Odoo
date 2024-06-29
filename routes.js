import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import Facilities from './components/Facilities';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
