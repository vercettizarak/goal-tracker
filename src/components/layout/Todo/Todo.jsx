import React, { useContext } from 'react';
import TodoItem from './TodoItem';

import AuthState from '../../../context/auth/authContext';

const Todo = () => {
  //Ini context
  const authContext = useContext(AuthState);
  const { todoList, taskUnDone, taskDone } = authContext;

  return (
    <div>
      <h4 className='text-primary'>Daily Task </h4>
      <div className='border rounded mt-3 mb-4'>
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            taskDone={taskDone}
            taskUnDone={taskUnDone}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
