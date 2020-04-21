import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = (props) => {
  const initialState = {
    user: {
      mission: 'Become a Baddest Motherfucker in the World',
      name: 'Vercetti',
    },
    weeklyGoals: {
      todo: [
        {
          id: 1,
          task: 'Read origin of Species',
        },
        {
          id: 2,
          task: 'Complete front-end app',
        },
        {
          id: 3,
          task: 'Learn photoshop in the',
        },
      ],
      done: [
        {
          id: 4,
          task: 'Design the layout',
        },
        {
          id: 5,
          task: 'Graphic design theory',
        },
        {
          id: 6,
          task: 'Trace a route for life',
        },
      ],
    },
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        weeklyGoals: state.weeklyGoals,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
