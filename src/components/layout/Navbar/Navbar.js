import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark text-white mb-3'>
      <div className='container-md d-flex justify-content-between'>
        <a href='#!' className='navbar-brand '>
          Goals Tracker - Track your Goals
        </a>

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
              <a className='nav-link' href='#!'>
                User
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                <i className='fas fa-cog'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
