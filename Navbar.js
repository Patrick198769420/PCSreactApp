import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">HOME</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/games">
              Games
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/chat">
              Chat
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/merch">
              Merch
            </Link>
          </li>
          <li className="nav-item dropdown me-3">
            <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/about/mission">Mission</Link></li>
              <li><Link className="dropdown-item" to="/about/vision">Vision</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/about/history">History</Link></li>
            </ul>       
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/connect">
              CONNECT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={(event) => { event.preventDefault(); toggleDarkMode(); }}>
              {isDarkMode ? 'Light' : 'Dark'}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
