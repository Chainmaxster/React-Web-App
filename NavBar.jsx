import React from 'react';
import { Link } from 'react-router-dom';
import SearchBtn from './SearchBtn';

const NavBar = ({ setSearch }) => {
  return (
    <nav className="navBar">
      <div className="navBar-brand">
        <h1>Anime Server</h1>
        <p>Learn more about your most favorite anime</p>
      </div>
      <div className="navBar-links">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/favorites">
          <div>Favorites</div>
        </Link>
        <Link to="/anime-info">
          <div>Anime Info</div>
        </Link>
      </div>
      <SearchBtn setSearch={setSearch} />
      <Link to="/login">
        <div>Sign In</div>
      </Link>
    </nav>
  );
};

export default NavBar;
