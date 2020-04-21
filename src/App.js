import React, { Fragment } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar/Navbar';
import Mission from './components/layout/Mission/Mission';
import Home from './components/pages/Home';

import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <Fragment>
        <Navbar />
        <Mission />
        <Home />
      </Fragment>
    </AuthState>
  );
};

export default App;
