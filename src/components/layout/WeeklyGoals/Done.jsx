import React from 'react';

const Done = ({ goal }) => {
  return (
    <div className='d-flex justify-content-between  card-task'>
      <h6 className='text-left d-inline mr-auto'>
        <i className='fas fa-check text-muted'></i> {goal.task}{' '}
      </h6>
      <i className='far fa-trash-alt'></i>
    </div>
  );
};

export default Done;
