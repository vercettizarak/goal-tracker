import React, { useContext } from 'react';

//Import context
import AuthContext from '../../../context/auth/authContext';

//Import Components
import Todo from './Todo';
import Done from './Done';

const WeeklyGoals = () => {
  const authContext = useContext(AuthContext);
  const { weeklyGoals } = authContext;
  return (
    <div>
      <div className='card border-primary mb-3'>
        <div className='card-header'>
          <h5 className='text-primary'>Goals to Accomplish</h5>
        </div>
        <div className='card-body'>
          {weeklyGoals.todo.map((goal) => (
            <Todo goal={goal} key={goal.id} />
          ))}
        </div>
      </div>

      <div className='card border-secondary mb-3'>
        <div className='card-header'>
          <h5 className='text-secondary'>Goals Accomplished</h5>
        </div>
        <div className='card-body text-secondary'>
          {weeklyGoals.done.map((goal) => (
            <Done goal={goal} key={goal.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyGoals;
