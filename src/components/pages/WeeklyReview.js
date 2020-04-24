import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
import WeeklyReviewEditor from '../layout/Editor/WeeklyReviewEditor';

const WeeklyReview = () => {
  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-3 text-center mt-5 mb-4'>
          {' '}
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <WeeklyReviewEditor />
        </div>
      </div>
    </div>
  );
};

export default WeeklyReview;
