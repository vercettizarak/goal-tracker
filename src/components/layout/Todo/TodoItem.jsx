import React from 'react';

const TodoItem = ({ todo: { time, task, isDone } }) => {
  if (isDone === false) {
    return (
      <div className='p-2 d-flex justify-content-between i-pointer'>
        <h6 className='d-inline-block'>{time}</h6>
        <h6 className='d-inline-block'>{task}</h6>
        <i className='far fa-square '></i>
      </div>
    );
  }
  return (
    <div className='p-2 d-flex justify-content-between i-pointer text-muted'>
      <h6 className='d-inline-block'>{time}</h6>
      <h6 className='d-inline-block'>{task}</h6>
      <i className='fas fa-check '></i>
    </div>
  );
};

export default TodoItem;
