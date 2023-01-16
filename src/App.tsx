import React from 'react';
import {Routes , Route } from "react-router-dom"; 
import './App.css';
import Login from './features/login';
import Signup from './features/signup';
import Dashboard from './features/dashboard';
import { ProtectedRoute } from './helpers/ProtectedRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="*" element= {<ProtectedRoute><Dashboard/></ProtectedRoute>}/> 
      </Routes>
    </div>
  );
}

export default App;
