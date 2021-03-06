import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
import QuarterlyReviewEditor from '../layout/Editor/QuarterlyReviewEditor';
import Mission from '../layout/Mission/Mission';

const QuarterlyReview = () => {
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
            <QuarterlyReviewEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuarterlyReview;
