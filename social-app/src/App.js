import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import LoggedOut from './pages/LoggedOut';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import Nav from './components/Nav';

function App() {
  const loginFlag = localStorage.getItem('chatterfield');
  const [loginGate, setLoginGate] = useState(loginFlag && true);

  return (
    <Router>
      <Nav loginGate={loginGate} setLoginGate={setLoginGate} />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route
          path='loggedout'
          element={<LoggedOut setLoginGate={setLoginGate} />}
        />
        <Route path='login' element={<Login setLoginGate={setLoginGate} />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='home' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
