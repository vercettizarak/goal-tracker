import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark text-white mb-3'>
      <div className='container-md d-flex justify-content-between'>
        <Link to='/' className='navbar-brand '>
          Goals Tracker - Track your Goals
        </Link>

        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='#!'>
                User
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#!'>
                <i className='fas fa-cog'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#!'>
                Log out
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
