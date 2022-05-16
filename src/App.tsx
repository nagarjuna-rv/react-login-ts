import React, { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path='/' element={<></>} />
      </Route>
      <Route path='*' element={<Navigate to="login" replace />}/>
    </Routes>
  );
}

export default App;
