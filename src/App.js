import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/Logins/login';
import Signup from './components/Signup/Signup';
import Navbar from './components/navbar/Header';
// import Layout from './Layout';
import Nopage from './components/noPage/Nopage';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from './components/protected/ProtectedRoute';

function App() {
  return (
    <UserAuthContextProvider>
      <Router>

        <Routes>
          <Route exact path="/" element={<Login />} ></Route>
          <Route exact path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>} >
          </Route>
          <Route exact path="/signup" element={<Signup />} ></Route>
          <Route exact path="/navbar" element={<Navbar />} ></Route>
          <Route exact path="*" element={<Nopage />} ></Route>
        </Routes>

      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
