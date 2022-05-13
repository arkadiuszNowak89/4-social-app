import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import LoggedOut from './pages/LoggedOut';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='loggedout' element={<LoggedOut />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
