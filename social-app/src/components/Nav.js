import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  let navigate = useNavigate();

  return (
    <nav className='main-nav'>
      <h2 onClick={() => navigate('/')}>Chatterfield</h2>
      <ul>
        <Link className='nav-item' to={'/'}>
          Home
        </Link>
        <Link className='nav-item' to={'login'}>
          Log In
        </Link>
        <Link className='nav-item' to={'signup'}>
          Sign Up!
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
