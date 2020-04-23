import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to='journal' className='btn btn-outline-primary w-75'>
        {' '}
        Journal
      </Link>
      <Link to='!#' className='btn btn-outline-primary w-75 my-3'>
        {' '}
        Own Your Shit
      </Link>
      <Link to='!#' className='btn btn-outline-primary w-75 mb-3'>
        {' '}
        1/4 Year Review
      </Link>
      <Link to='!#' className='btn btn-outline-primary w-75 mb-3'>
        {' '}
        Yearly Review
      </Link>
      <Link to='!#' className='btn btn-outline-primary w-75 mb-3'>
        {' '}
        Profile
      </Link>
    </div>
  );
};

export default Sidebar;
