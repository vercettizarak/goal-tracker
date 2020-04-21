import React from 'react';

const Todo = ({ goal }) => {
  return (
    <div className='d-flex justify-content-between  card-task'>
      <h6 className='text-left d-inline mr-auto'>
        <i class='far fa-square'></i> {goal.task}{' '}
      </h6>
      <i class='far fa-trash-alt text-danger'></i>
    </div>
  );
};

export default Todo;
