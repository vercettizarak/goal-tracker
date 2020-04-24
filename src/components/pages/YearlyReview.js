import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
import YearlyReviewEditor from '../layout/Editor/YearlyReviewEditor';

const YearlyReview = () => {
  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-3 text-center mt-5 mb-4'>
          {' '}
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <YearlyReviewEditor />
        </div>
      </div>
    </div>
  );
};

export default YearlyReview;
