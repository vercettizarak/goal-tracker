import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar/Navbar';
import Mission from './components/layout/Mission/Mission.jsx';
import Home from './components/pages/Home';
import About from './components/pages/About';

import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Mission />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
