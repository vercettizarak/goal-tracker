import React, { useContext } from 'react';
import WeeklyGoals from '../layout/WeeklyGoals/WeeklyGoals';

const Home = () => {
  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-3 bg-danger'> Side bar</div>
        <div className='col-md-6 bg-primary'>Daily task</div>
        <div className='col-md-3 '>
          <WeeklyGoals />
        </div>
      </div>
    </div>
  );
};

export default Home;
