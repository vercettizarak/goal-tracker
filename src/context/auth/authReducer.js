import {
  GOAL_DONE,
  GOAL_UNDONE,
  DELETE_GOAL,
  TASK_DONE,
  TASK_UNDONE,
} from '../type';

export default (state, action) => {
  switch (action.type) {
    //Task Done
    case TASK_DONE:
      return {
        ...state,
      };
    //Finish a Goal
    case GOAL_DONE:
      return {
        ...state,
        weeklyGoals: {
          ...state.weeklyGoals,
          unfinished: state.weeklyGoals.unfinished.filter(
            (goal) => goal.id !== action.payload
          ),

          finished: [
            ...state.weeklyGoals.finished,
            ...state.weeklyGoals.unfinished.filter(
              (goal) => goal.id === action.payload
            ),
          ],
        },
      };

    //Undo Goal
    case GOAL_UNDONE:
      return {
        ...state,
        weeklyGoals: {
          ...state.weeklyGoals,
          unfinished: [
            ...state.weeklyGoals.unfinished,
            ...state.weeklyGoals.finished.filter(
              (goal) => goal.id === action.payload
            ),
          ],
          finished: state.weeklyGoals.finished.filter(
            (goal) => goal.id !== action.payload
          ),
        },
      };

    // Delete Goal
    case DELETE_GOAL:
      return {
        ...state,
        weeklyGoals: {
          ...state.weeklyGoals,
          unfinished: state.weeklyGoals.unfinished.filter(
            (goal) => goal.id !== action.payload
          ),
          finished: state.weeklyGoals.finished.filter(
            (goal) => goal.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
