import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  height: '8vh',
};

const linkStyles = {
  marginLeft: '2%',
  textDecoration: 'none',
  color: '#0077B6',
  cursor: 'pointer',
  fontSize: '1.5em',
  textShadow: '2px 2px rgb(200, 200, 200)',
};

const Header = () => (
  <div className="header" style={headerStyles}>
    <Link to="/" style={linkStyles}>
      Home
    </Link>
  </div>
);

export default Header;
