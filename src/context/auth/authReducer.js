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
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: true } : todo
        ),
      };

    //Task UnDone
    case TASK_UNDONE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: false } : todo
        ),
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
