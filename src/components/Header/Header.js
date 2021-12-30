import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss'

const Header = () => (
  <div className={styles.header}>
    <Link to="/" className={styles.headerLink}>Home</Link>
  </div>
);

export default Header;