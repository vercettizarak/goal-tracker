import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
import WeeklyReviewEditor from '../layout/Editor/WeeklyReviewEditor';
import Mission from '../layout/Mission/Mission';

const WeeklyReview = () => {
  return (
    <div>
      <Mission />
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
    </div>
  );
};

export default WeeklyReview;
