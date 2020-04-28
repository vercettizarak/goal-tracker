import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Journal from './components/pages/Journal';
import WeeklyReview from './components/pages/WeeklyReview';
import QuarterlyReview from './components/pages/QuarterlyReview';
import YearlyReview from './components/pages/YearlyReview';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exatc path='/journal' component={Journal} />
            <Route exatc path='/week' component={WeeklyReview} />
            <Route exact path='/quarter' component={QuarterlyReview} />
            <Route exact path='/year' component={YearlyReview} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
