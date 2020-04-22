import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
  GOAL_DONE,
  GOAL_UNDONE,
  DELETE_GOAL,
  TASK_DONE,
  TASK_UNDONE,
} from '../type';

const AuthState = (props) => {
  const initialState = {
    user: {
      mission: 'Become a Baddest Motherfucker in the World',
      name: 'Vercetti',
    },
    weeklyGoals: {
      unfinished: [
        { id: 1, task: 'Read origin of Species' },
        { id: 2, task: 'Complete front-end app' },
        { id: 3, task: 'Learn photoshop in the' },
      ],
      finished: [
        { id: 4, task: 'Design the layout' },
        { id: 5, task: 'Graphic design theory' },
        { id: 6, task: 'Trace a route for life' },
      ],
    },
    todoList: [
      { id: 1, time: '07:00 - 08:00', task: 'Lorem Ipsum', isDone: true },
      { id: 2, time: '08:00 - 09:00', task: 'Lorem Ipsum', isDone: true },
      { id: 3, time: '09:00 - 10:00', task: 'Lorem Ipsum', isDone: true },
      { id: 4, time: '10:00 - 11:00', task: 'Lorem Ipsum', isDone: true },
      { id: 5, time: '11:00 - 12:00', task: 'Lorem Ipsum', isDone: true },
      { id: 6, time: '12:00 - 13:00', task: 'Lorem Ipsum', isDone: false },
      { id: 7, time: '13:00 - 14:00', task: 'Lorem Ipsum', isDone: false },
    ],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Complete Goal
  const goalDone = (id) => {
    dispatch({
      type: GOAL_DONE,
      payload: id,
    });
  };

  //Undo Goal
  const undoGoal = (id) => {
    dispatch({
      type: GOAL_UNDONE,
      payload: id,
    });
  };

  //Delete Goal
  const deleteGoal = (id) => {
    dispatch({
      type: DELETE_GOAL,
      payload: id,
    });
  };

  //Complete a Task
  const taskDone = (id) => {
    dispatch({
      type: TASK_DONE,
      payload: id,
    });
  };

  //Undo a Task
  const taskUnDone = (id) => {
    dispatch({
      type: TASK_UNDONE,
      payload: id,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        weeklyGoals: state.weeklyGoals,
        todoList: state.todoList,
        goalDone,
        undoGoal,
        deleteGoal,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
